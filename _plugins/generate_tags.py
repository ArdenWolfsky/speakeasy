#!/usr/bin/env python
# Filename: __plugins/compile_tags.py

'''
This script generates tag pages for all your post tags for a 
Jekyll site. It is invoked from a plugin after post_write.
Run it from the project root if testing.
Current convention expected for tag names is r/[-\w\d]+/
'''

import glob
import os
from unidecode import unidecode

POST_DIR = '_posts/'
TAG_DIR = 'tag/'

# Collect all tags from all posts.
all_tags = []
for fname in glob.glob(POST_DIR + '*.md'):
  with open(fname, 'r', encoding='utf-8') as f:
    for line in f:
      line = line.strip().replace('[', '').replace(']', '')
      # Find tags & cut them.
      if line.startswith('tags: '):
        all_tags += [
          t.strip() for t in line[len("tags: "):].split(' ')]
        break
all_tags = sorted(list(set(all_tags)))

# Remove old tag pages
old_tags = glob.glob(TAG_DIR + '*.md')
for tag in old_tags:
  os.remove(tag)

# Create tag directory if it does not exist
if not os.path.exists(TAG_DIR):
  os.makedirs(TAG_DIR)

# Write new tag pages.
TAG_PAGE_TEMPLATE = '''---
layout: tag
tag: {tag}
robots: noindex
title: {title}
---'''
for tag in all_tags:
  print('Generating page for ' + tag)
  tag_fixed = unidecode(tag)
  title = tag.replace('-', ' ')
  with open(TAG_DIR + tag.lower() + '.md', 'a', encoding='utf-8') as f:
    f.write(TAG_PAGE_TEMPLATE.format(tag=tag, title=title))