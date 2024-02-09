#!/usr/bin/env python
import glob
import os

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
  print('Removing old tag page ' + str(tag))
  os.remove(tag)

# Create tag directory if it does not exist
if not os.path.exists(TAG_DIR):
  os.makedirs(TAG_DIR)

print('Tags: ' + str(all_tags))

# Write new tag pages.
TAG_PAGE_TEMPLATE = '''---
layout: tag
tag: {tag}
noindex: true
title: {title}
description: "All drinks tagged with {title}."
permalink: /tag/{tag_lower}
pagination: 
  enabled: true
  collection: posts
  per_page: 9
  tag: {tag}
---
Showing all drinks that contain {title}.
'''
for tag in all_tags:
  print('Generating tag page for ' + tag)
  title = tag.replace('-', ' ')
  with open(TAG_DIR + tag.lower() + '.md', 'w', encoding='utf-8') as f:
    f.write(TAG_PAGE_TEMPLATE.format(tag=tag, title=title, tag_lower=tag.lower()))