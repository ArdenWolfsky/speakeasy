# Set the root path
$main_folder = "F:\Everything\Development\wolfskymedia\websites\speakeasy.ardenwolfsky.com\"
Set-Location -Path $main_folder
# Pull any changes
#git pull
# Delete these files
Remove-Item -Path "_site" -Recurse -Force
# Generate the tag pages
python3 scripts/generate_tags.py
python3 scripts/generate_category.py
# Compile the site
bundle exec jekyll build

$files = Get-ChildItem -Path "$main_folder\_site\*.html" -Recurse

foreach ($file in $files) {
    #Write-Output $file.FullName
    #if ($file.PSIsContainer -eq $false) {
    #    & html-minifier --collapse-whitespace --remove-comments --remove-optional-tags --remove-redundant-attributes --remove-script-type-attributes --remove-tag-whitespace --use-short-doctype "$file" -o "$file"
    #}
}