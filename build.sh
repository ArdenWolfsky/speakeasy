#!/bin/bash
cd /var/www/arden-new/
git pull
rm -r _site/
rm -r tag/
python3 scripts/generate_tags.py
bundle exec jekyll build