# Set the root path
$main_folder = "F:\Everything\Development\wolfskymedia\websites\speakeasy.ardenwolfsky.com\"
Set-Location -Path $main_folder
# Delete these files
If (Test-Path "_site") {
    Write-Output "_site detected, removing..."
    Remove-Item -Path "_site" -Recurse -Force
}
# Generate the tag pages
Write-Output 'Running python scripts to generate pages...'
python3 scripts/generate_tags.py
python3 scripts/generate_category.py
# Serve the site
$env:JEKYLL_ENV = "development"
Write-Output "Running: $env:JEKYLL_ENV"
bundle exec jekyll serve