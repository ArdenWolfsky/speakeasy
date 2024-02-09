#!/usr/bin/env python
import glob
import os

POST_DIR = '_posts/'
CATEGORY_DIR = 'category/'

# Collect all categories from all posts.
all_categories = []
for fname in glob.glob(POST_DIR + '*.md'):
  with open(fname, 'r', encoding='utf-8') as f:
    for line in f:
      line = line.strip().replace('[', '').replace(']', '')
      # Find types & cut them.
      if line.startswith('categories: '):
        all_categories += [
          t.strip() for t in line[len("categories: "):].split(' ')]
        break
all_categories = sorted(list(set(all_categories)))

# Remove old type pages
old_categories = glob.glob(CATEGORY_DIR + '*.md')
for category in old_categories:
  print('Removing old tag page ' + str(category))
  os.remove(category)

# Create tag directory if it does not exist
if not os.path.exists(CATEGORY_DIR):
  os.makedirs(CATEGORY_DIR)

print('Categories: ' + str(all_categories))

# Write new tag pages.
TYPE_PAGE_TEMPLATE = '''---
layout: category
noindex: true
title: {title}
description: "Drinks from the {title} category."
permalink: /category/{category_lower}
pagination: 
  enabled: true
  collection: posts
  per_page: 9
  category: {category}
---
Showing all drinks from the {title} category.
'''
for category in all_categories:
  print('Generating category page for ' + category)
  title = category.replace('-', ' ')
  with open(CATEGORY_DIR + category.lower() + '.md', 'w', encoding='utf-8') as f:
    f.write(TYPE_PAGE_TEMPLATE.format(category=category, title=title, category_lower=category.lower()))