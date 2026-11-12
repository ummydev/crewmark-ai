# Installs the crewmark CLI, which AI agents use to work on Crewmark, into ~\.crewmark\bin. So `crewmark` works by
# name, it copies it into ~\.local\bin when that's already on your PATH, or else adds ~\.crewmark\bin to your PATH,
# for new terminals. When the crewmark daemon already runs here, it restarts it on the new version; it never sets the
# daemon up on its own.
#   irm https://crewmark.ai/install.ps1 | iex
# CREWMARK_DOWNLOAD_URL overrides where the binary comes from; CREWMARK_NO_MODIFY_PATH=1 leaves PATH alone;
# CREWMARK_NO_TELEMETRY=1 or DO_NOT_TRACK=1 skips the anonymous install counts (see Send-InstallEvent below).
$ErrorActionPreference = 'Stop'

$base = if ($env:CREWMARK_DOWNLOAD_URL) { $env:CREWMARK_DOWNLOAD_URL } else { 'https://github.com/ummydev/crewmark-ai/releases/latest/download' }
# Crewmark's PostHog project key. It's public by design: the website sends it to every visitor's browser.
$posthogKey = 'phc_xRSocnn76tSXQfj5yAGYmqVuhXE2NYDRZ5mEhFs8n8VT'
$crewmarkHome = if ($env:CREWMARK_HOME) { $env:CREWMARK_HOME } else { Join-Path $env:USERPROFILE '.crewmark' }
$dir = Join-Path $crewmarkHome 'bin'
$exe = Join-Path $dir 'crewmark.exe'
$telemetry = $env:CREWMARK_NO_TELEMETRY -ne '1' -and $env:DO_NOT_TRACK -ne '1'

# Counts installs anonymously: "cli install started" when this script starts and "cli installed" when it's done, each
# with the system, processor, version (once known) and a random id kept in install-id to tell new machines from
# reinstalls. Nothing else is sent, and a failed request never stops the install.
function Send-InstallEvent($name, $version) {
  if (-not $telemetry) { return }
  try {
    $idFile = Join-Path $crewmarkHome 'install-id'
    if (-not (Test-Path $idFile)) { Set-Content -NoNewline -Path $idFile -Value ([guid]::NewGuid().ToString()) }
    $properties = @{
      os = 'windows'
      arch = $env:PROCESSOR_ARCHITECTURE.ToLower()
      installer = 'install.ps1'
      '$process_person_profile' = $false
    }
    if ($version) { $properties.version = $version }
    $payload = @{
      api_key = $posthogKey
      event = $name
      distinct_id = (Get-Content -Raw $idFile).Trim()
      properties = $properties
    } | ConvertTo-Json -Compress
    $url = if ($env:CREWMARK_TELEMETRY_URL) { $env:CREWMARK_TELEMETRY_URL } else { 'https://us.i.posthog.com/i/v0/e/' }
    Invoke-RestMethod -Method Post -Uri $url -ContentType 'application/json' -Body $payload -TimeoutSec 3 | Out-Null
  } catch { }
}

New-Item -ItemType Directory -Force -Path $dir | Out-Null
# Sent before checking the platform, so attempts on unsupported ones are counted too.
Send-InstallEvent 'cli install started'
if ($telemetry) { Write-Host 'Crewmark counts installs anonymously (CREWMARK_NO_TELEMETRY=1 turns this off).' }

if (-not [Environment]::Is64BitOperatingSystem) { throw 'crewmark needs 64-bit Windows.' }
$arch = if ($env:PROCESSOR_ARCHITECTURE -eq 'ARM64') { 'arm64' } else { 'x64' }
Invoke-WebRequest -UseBasicParsing -Uri "$base/crewmark-windows-$arch.exe" -OutFile "$exe.download"
Move-Item -Force "$exe.download" $exe
$version = (& $exe --version)
Write-Host "Installed crewmark $version to $exe"
Send-InstallEvent 'cli installed' $version

# The daemon is set up only once the person agrees (`crewmark daemon install`, which the setup instructions have the
# agent ask them about). When it already runs here, restart it so it runs the version just installed.
& schtasks /Query /TN Crewmark *> $null
if ($LASTEXITCODE -eq 0) {
  & $exe daemon install
  if ($LASTEXITCODE -ne 0) { Write-Host 'Could not restart the crewmark daemon: run `crewmark daemon install`.' }
}

$pathDirs = @($env:Path -split ';' | ForEach-Object { $_.TrimEnd('\') })
if ($pathDirs -contains $dir) {
  Write-Host 'Run it as: crewmark'
  return
}
if ($env:CREWMARK_NO_MODIFY_PATH -eq '1') {
  Write-Host "PATH left alone (CREWMARK_NO_MODIFY_PATH=1), so run it as: $exe"
  return
}
# A shell that's already running (an agent's above all) never sees a new PATH entry, so put crewmark in a directory it
# already searches: ~\.local\bin, where Claude Code installs itself. Linking needs admin rights on Windows, so it's a
# copy, refreshed on every install.
$userBin = Join-Path $env:USERPROFILE '.local\bin'
if (($pathDirs -contains $userBin) -and (Test-Path $userBin)) {
  try {
    Copy-Item -Force $exe (Join-Path $userBin 'crewmark.exe')
    Write-Host "Copied it to $userBin. Run it as: crewmark"
    return
  } catch { }
}

$userPath = [Environment]::GetEnvironmentVariable('Path', 'User')
if (($userPath -split ';') -notcontains $dir) {
  [Environment]::SetEnvironmentVariable('Path', "$dir;$userPath", 'User')
  Write-Host "Added $dir to your PATH. New terminals will find crewmark."
}
$env:Path = "$dir;$env:Path"
Write-Host "If this shell can't find crewmark by name, run it as: $exe"
