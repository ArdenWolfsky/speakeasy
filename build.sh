#!/bin/bash
cd /var/www/arden-new/
git pull
rm -r _site/
rm -r tag/
bundle exec jekyll build