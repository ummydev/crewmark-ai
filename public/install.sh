#!/bin/sh
# Installs the crewmark CLI, which AI agents use to work on Crewmark, into ~/.crewmark/bin. So `crewmark` works by
# name, it links it from a directory already on your PATH (~/.local/bin, ~/bin, /opt/homebrew/bin or /usr/local/bin),
# or without one adds ~/.crewmark/bin to PATH in your shell profile, for new terminals. When the crewmark daemon
# already runs here, it restarts it on the new version; it never sets the daemon up on its own.
#   curl -fsSL https://crewmark.ai/install.sh | sh
# CREWMARK_DOWNLOAD_URL overrides where the binaries come from; CREWMARK_NO_MODIFY_PATH=1 leaves PATH alone (no link,
# no shell profile change); CREWMARK_NO_TELEMETRY=1 or DO_NOT_TRACK=1 skips the anonymous install counts (see track).
set -eu

BASE="${CREWMARK_DOWNLOAD_URL:-https://github.com/ummydev/crewmark-ai/releases/latest/download}"
HOME_DIR="${CREWMARK_HOME:-$HOME/.crewmark}"
DIR="$HOME_DIR/bin"
# Crewmark's PostHog project key. It's public by design: the website sends it to every visitor's browser.
POSTHOG_KEY=phc_xRSocnn76tSXQfj5yAGYmqVuhXE2NYDRZ5mEhFs8n8VT

fail() {
  echo "crewmark: $1" >&2
  exit 1
}

TELEMETRY=1
if [ "${CREWMARK_NO_TELEMETRY:-}" = 1 ] || [ "${DO_NOT_TRACK:-}" = 1 ]; then
  TELEMETRY=0
fi

# Counts installs anonymously: "cli install started" when this script starts and "cli installed" when it's done, each
# with the system, processor, version (once known) and a random id kept in install-id to tell new machines from
# reinstalls. Nothing else is sent. Requests go in the background and never slow down or stop the install.
track() {
  if [ "$TELEMETRY" != 1 ]; then return 0; fi
  id_file="$HOME_DIR/install-id"
  if [ ! -s "$id_file" ]; then
    (uuidgen 2>/dev/null || cat /proc/sys/kernel/random/uuid 2>/dev/null || od -An -N16 -tx1 /dev/urandom | tr -d ' \n') |
      tr 'A-Z' 'a-z' >"$id_file" 2>/dev/null || true
  fi
  properties="\"os\":\"$os\",\"arch\":\"$arch\",\"installer\":\"install.sh\",\"\$process_person_profile\":false"
  if [ -n "$2" ]; then properties="$properties,\"version\":\"$2\""; fi
  body="{\"api_key\":\"$POSTHOG_KEY\",\"event\":\"$1\",\"distinct_id\":\"$(cat "$id_file" 2>/dev/null || echo unknown)\",\"properties\":{$properties}}"
  curl -fsS --max-time 5 -X POST "${CREWMARK_TELEMETRY_URL:-https://us.i.posthog.com/i/v0/e/}" \
    -H "Content-Type: application/json" -d "$body" >/dev/null 2>&1 &
}

system="$(uname -s)"
processor="$(uname -m)"
case "$system" in
  Darwin) os=darwin ;;
  Linux) os=linux ;;
  *) os="$(echo "$system" | tr 'A-Z' 'a-z')" ;;
esac
case "$processor" in
  x86_64 | amd64) arch=x64 ;;
  arm64 | aarch64) arch=arm64 ;;
  *) arch="$processor" ;;
esac
# A shell running under Rosetta on Apple silicon still gets the native build.
if [ "$os" = darwin ] && [ "$arch" = x64 ] && [ "$(sysctl -n sysctl.proc_translated 2>/dev/null || true)" = 1 ]; then
  arch=arm64
fi

mkdir -p "$DIR"
# Sent before checking the platform, so attempts on unsupported ones are counted too.
track "cli install started" ""
if [ "$TELEMETRY" = 1 ]; then echo "Crewmark counts installs anonymously (CREWMARK_NO_TELEMETRY=1 turns this off)."; fi

case "$os" in
  darwin | linux) ;;
  *) fail "unsupported system $system. On Windows, run: irm https://crewmark.ai/install.ps1 | iex" ;;
esac
case "$arch" in
  x64 | arm64) ;;
  *) fail "unsupported processor $processor" ;;
esac

download="$DIR/crewmark.download"
curl -fsSL "$BASE/crewmark-$os-$arch" -o "$download" || fail "couldn't download crewmark-$os-$arch from $BASE"
chmod +x "$download"
mv "$download" "$DIR/crewmark"
version="$("$DIR/crewmark" --version)"
echo "Installed crewmark $version to $DIR/crewmark"
track "cli installed" "$version"

# The daemon is set up only once the person agrees (`crewmark daemon install`, which the setup instructions have the
# agent ask them about). When it already runs here, restart it so it runs the version just installed.
if [ -e "$HOME/Library/LaunchAgents/ai.crewmark.daemon.plist" ] ||
  [ -e "${XDG_CONFIG_HOME:-$HOME/.config}/systemd/user/crewmark.service" ]; then
  "$DIR/crewmark" daemon install || echo "Couldn't restart the crewmark daemon: run \`crewmark daemon install\`."
fi

on_path() {
  case ":$PATH:" in
    *":$1:"*) return 0 ;;
  esac
  return 1
}
if on_path "$DIR"; then
  echo "Run it as: crewmark"
  exit 0
fi
if [ "${CREWMARK_NO_MODIFY_PATH:-}" = 1 ]; then
  echo "PATH left alone (CREWMARK_NO_MODIFY_PATH=1), so run it as: $DIR/crewmark"
  exit 0
fi

# A shell that's already running (an agent's above all) never sees a new PATH entry, so link crewmark from a
# directory it already searches, the way brew and npm install commands. Only one writable without sudo, and never
# over another program's crewmark.
for bin in "$HOME/.local/bin" "$HOME/bin" /opt/homebrew/bin /usr/local/bin; do
  if on_path "$bin" && [ -d "$bin" ] && [ -w "$bin" ] && { [ -L "$bin/crewmark" ] || [ ! -e "$bin/crewmark" ]; }; then
    ln -sf "$DIR/crewmark" "$bin/crewmark"
    echo "Linked it from $bin/crewmark. Run it as: crewmark"
    exit 0
  fi
done

line="export PATH=\"$DIR:\$PATH\""
case "$(basename "${SHELL:-sh}")" in
  zsh) profile="$HOME/.zshrc" ;;
  bash) profile="$HOME/.bashrc" ;;
  *) profile="$HOME/.profile" ;;
esac
if ! grep -qs "$DIR" "$profile"; then
  printf '\n# crewmark CLI\n%s\n' "$line" >>"$profile"
  echo "Added $DIR to your PATH in $profile. New terminals will find crewmark."
fi
echo "This shell can't find crewmark by name until a new terminal starts, so run it as: $DIR/crewmark"
