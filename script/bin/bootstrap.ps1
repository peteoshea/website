Write-Output "`n==> Bootstrapping dependencies..."

# Setup path variables
$binPath = Split-Path -Path $PSCommandPath -Parent
$scriptPath = Split-Path -Path $binPath -Parent
$basePath = Split-Path -Path $scriptPath -Parent

# Ensure PowerShell is installed and up to date
if (-not (Get-Command pwsh -ErrorAction SilentlyContinue)) {
  Write-Output "==> Installing PowerShell..."
  winget install Microsoft.PowerShell --exact
} else {
  Write-Output "==> PowerShell is already installed. Checking for updates..."
  winget upgrade Microsoft.PowerShell --exact
}

# Install PSScriptAnalyzer, but only when it is missing or out of date
$pssaName = 'PSScriptAnalyzer'
$pssaInstalled = Get-Module -ListAvailable -Name $pssaName |
  Sort-Object -Property Version -Descending |
  Select-Object -First 1

if ($pssaInstalled) {
  $pssaLatest = Find-Module -Name $pssaName -ErrorAction SilentlyContinue |
    Select-Object -First 1
}

if (-not $pssaInstalled -or ($pssaLatest -and $pssaInstalled.Version -lt $pssaLatest.Version)) {
  $installedVersion = if ($pssaInstalled) { $pssaInstalled.Version } else { 'none' }
  $latestVersion = if ($pssaLatest) { $pssaLatest.Version } else { 'unknown' }
  Write-Output "===> Installing PSScriptAnalyzer... (installed: $installedVersion, latest: $latestVersion)"
  Install-Module -Name $pssaName -Force
} else {
  Write-Output "PSScriptAnalyzer $($pssaInstalled.Version) is already up to date, skipping install..."
}

$pssaInstalled = Get-Module -ListAvailable -Name $pssaName |
  Sort-Object -Property Version -Descending |
  Select-Object -First 1
if (-not $pssaInstalled) {
  throw "PSScriptAnalyzer installation failed"
}

function Install-WinGetPackage {
  param (
    [Parameter(Mandatory = $true)]
    [string]
    $Name
  )
  Write-Output "===> Installing '$Name' using winget"
  # Enforce use of exact package name as name matching can cause issues if multiple matches found
  winget install $Name --exact
}

# Install any required winget packages
$packagesFilePath = "$basePath\winget-packages"
if (Test-Path -Path "$packagesFilePath" -PathType Leaf) {
  Write-Output "`n==> Installing winget packages..."
  $packageList = Get-Content -Path "$packagesFilePath"
  if ($packageList.Count -eq 1) {
    # A single item is treated as a string not an array
    Install-WinGetPackage -Name $packageList
  } else {
    For ($index = 0; $index -lt $packageList.Count; $index++) {
      $package = $packageList[$index];
      Install-WinGetPackage -Name $package
    }
  }
}

# If package.json file exists then ensure Node.js is setup and run `npm install`
$packageJson = "$basePath\package.json"
$nodePackages = Test-Path -Path "$packageJson" -PathType Leaf
if ($nodePackages) {
  # Setup appropriate version of Node.js from .nvmrc
  $nvmrc = "$basePath\.nvmrc"
  if (Test-Path -Path "$nvmrc" -PathType Leaf) {
    Write-Output "`n==> Installing appropriate version of Node.js..."
    $nodeVersion = Get-Content -Path "$nvmrc"
    nvm install $nodeVersion
    nvm use $nodeVersion
  }
  Write-Output "Where is npm running from:"
  where.exe npm
  Write-Output "What version of npm:"
  npm -v

  Write-Output "`n==> Installing npm dependencies..."
  Push-Location "$basePath"
  Write-Output "Change directory to: $(Get-Location)"

  Write-Output "Install npm packages..."
  npm install
  Write-Output "Checking for outdated packages..."
  npm outdated
  # Ignore exit code as we don't care if there are outdated packages, we just want to display them
  $global:LASTEXITCODE = 0

  Pop-Location
  Write-Output "Change directory back to: $(Get-Location)"
}
