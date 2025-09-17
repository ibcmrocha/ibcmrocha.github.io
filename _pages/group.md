---
layout: page
title: group
permalink: /group/
description: 
nav: true
nav_order: 2
---

<div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
  {% assign members = site.people | sort: "order" %}
  {% for person in members %}
    <div class="col">
      {% include people-card.html person=person %}
    </div>
  {% endfor %}
</div>
