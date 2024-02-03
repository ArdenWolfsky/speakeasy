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
npm install html-minifier -g
# Generate the pages
python3 scripts/generate_tags.py
python3 scripts/generate_category.py
# Compile the site
bundle install
bundle exec jekyll build
recursive_minify "_site"
