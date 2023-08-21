#!/bin/bash

recursive_minify() {
    local folder="$1"

    for file in "$folder"/*.html; do
        if [ -f "$file" ]; then
            echo $file
            html-minifier --collapse-whitespace --remove-comments --remove-optional-tags --remove-redundant-attributes --remove-script-type-attributes --remove-tag-whitespace --use-short-doctype "$file" -o "$file"
        fi
    done

    for subfolder in "$folder"/*; do
        if [ -d "$subfolder" ]; then
            recursive_minify "$subfolder"
        fi
    done
}

# Set the root path
main_folder="/var/www/arden-new"
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
recursive_minify "$main_folder/_site"