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
# Compile the site
bundle exec jekyll build

$files = Get-ChildItem -Path "$main_folder\_site\*.html" -Recurse

foreach ($file in $files) {
    Write-Output ('Minifying: ' + $file.fullName)
    if ($file.PSIsContainer -eq $false) {
        & html-minifier --collapse-whitespace --remove-comments --remove-optional-tags --remove-redundant-attributes --remove-script-type-attributes --remove-tag-whitespace --use-short-doctype "$file" -o "$file"
    }
}