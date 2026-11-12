import { createHash } from "node:crypto";
import { execFileSync } from "node:child_process";
import { mkdirSync, readFileSync, rmSync, statSync, writeFileSync } from "node:fs";
import { join, resolve } from "node:path";

// Builds the crewmark CLI (Go, in cli/) into one static binary per platform, with no runtime or system libraries
// needed, so the Linux builds also run on musl systems like Alpine. Usage: npm run cli:build [name filter].
// Output: dist/cli/crewmark-<os>-<arch>[.exe], the names install.sh and install.ps1 download, plus SHA256SUMS.

const TARGETS = [
  ["darwin", "arm64", "crewmark-darwin-arm64"],
  ["darwin", "amd64", "crewmark-darwin-x64"],
  ["linux", "amd64", "crewmark-linux-x64"],
  ["linux", "arm64", "crewmark-linux-arm64"],
  ["windows", "amd64", "crewmark-windows-x64.exe"],
  ["windows", "arm64", "crewmark-windows-arm64.exe"],
] as const;

const OUT = resolve("dist", "cli");
rmSync(OUT, { recursive: true, force: true });
mkdirSync(OUT, { recursive: true });

const only = process.argv[2];
const sums: string[] = [];
for (const [goos, goarch, name] of TARGETS) {
  if (only && !name.includes(only)) continue;
  const outfile = join(OUT, name);
  execFileSync("go", ["build", "-trimpath", "-ldflags=-s -w", "-o", outfile, "."], {
    cwd: "cli",
    env: { ...process.env, GOOS: goos, GOARCH: goarch, CGO_ENABLED: "0" },
    stdio: "inherit",
  });
  sums.push(`${createHash("sha256").update(readFileSync(outfile)).digest("hex")}  ${name}`);
  console.log(`${name.padEnd(28)} ${(statSync(outfile).size / 1024 / 1024).toFixed(1)} MB`);
}
writeFileSync(join(OUT, "SHA256SUMS"), `${sums.join("\n")}\n`);
