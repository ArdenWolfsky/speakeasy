#!/bin/bash
# Set the root path
main_folder="/var/www/arden-new/"
cd $main_folder
# Pull any changes
git pull
# Delete these files
rm -r _site/
rm -r tag/
# Generate the tag pages
python3 scripts/generate_tags.py
# Compile the site
bundle exec jekyll build

for file in "$main_folder"/_site/*.html; do
    if [ -f "$file" ]; then
        html-minifier --collapse-whitespace --remove-comments --remove-optional-tags --remove-redundant-attributes --remove-script-type-attributes --remove-tag-whitespace --use-short-doctype "$file" -o "$file"
    fi
done