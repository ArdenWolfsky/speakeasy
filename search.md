---
layout: page
title: Search
description: "Looking for something specific? Start here."
slug: search
---
{% assign all_tags = "" | split: "," %}

{% for post in paginator.posts %}
  {% assign post_tags = post.tags | join: "," | append: "," %}
  {% assign all_tags = all_tags | concat: post_tags %}
{% endfor %}

{% assign unique_tags = all_tags | split: "," | uniq | sort %}

{% for tag in unique_tags %}
  <span class="tag tag-front">{{ tag }}</span>
{% endfor %}