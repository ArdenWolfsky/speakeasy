# Remove old site
If (Test-Path "_site") {
    Write-Output "_site detected, removing..."
    Remove-Item -Path "_site" -Recurse -Force
}
# Generate tag and category pages
Write-Output 'Running python scripts to generate pages...'
python3 scripts/generate_tags.py
python3 scripts/generate_category.py
# Set the target environment
$env:JEKYLL_ENV = "development"
Write-Output "Running: $env:JEKYLL_ENV"
# Build the site
bundle exec jekyll serve