#!/bin/bash
main_folder="/var/www/arden-new/"
cd $main_folder
git pull
rm -r _site/
rm -r tag/
python3 scripts/generate_tags.py
bundle exec jekyll build

for file in "$main_folder"/_site/*.html; do
    if [ -f "$file" ]; then
        html-minifier --collapse-whitespace --remove-comments --remove-optional-tags --remove-redundant-attributes --remove-script-type-attributes --remove-tag-whitespace --use-short-doctype "$file" -o "$file"
    fi
done