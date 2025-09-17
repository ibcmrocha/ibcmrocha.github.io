---
layout: page
title: group
permalink: /group/
description: 
nav: true
nav_order: 2
---

<div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 gx-4 gy-4">
  {% assign members = site.people | sort: "order" %}
  {% for person in members %}
    <div class="col">
      {% include people.liquid person=person %}
    </div>
  {% endfor %}
</div>
