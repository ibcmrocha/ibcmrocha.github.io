---
layout: page
title: research
permalink: /research/
description: 
nav: true 
nav_order: 2
display_categories: [tools, applications]
horizontal: false
---

My research deals with developing the computational tools that will be used for the design of future materials. I focus on **computational solid mechanics**, primarily with Finite Element Modeling.

High-fidelity FEM simulations can easily take weeks to run, and modern materials feature such an immense complexity (e.g. biomaterials fabricated by living organisms) and design freedom (e.g. composites, metamaterials) that investigations on material behavior and new designs often require a large number of these simulations.

My vision is to alleviate this effort and augment the study and design of high-performance materials by combining computational solid mechanics and scientific machine learning:

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="/assets/img/research_vision.png" title="Research lines" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

My research directions can therefore be split into **tools** and **applications**:

<!-- pages/projects.md -->
<div class="projects">
{% if site.enable_project_categories and page.display_categories %}
  <!-- Display categorized projects -->
  {% for category in page.display_categories %}
  <a id="{{ category }}" href=".#{{ category }}">
    <h2 class="category">{{ category }}</h2>
  </a>
  {% assign categorized_projects = site.projects | where: "category", category %}
  {% assign sorted_projects = categorized_projects | sort: "importance" %}
  <!-- Generate cards for each project -->
  {% if page.horizontal %}
  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for project in sorted_projects %}
      {% include projects_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in sorted_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
  {% endif %}
  {% endfor %}

{% else %}

<!-- Display projects without categories -->

{% assign sorted_projects = site.projects | sort: "importance" %}

  <!-- Generate cards for each project -->

{% if page.horizontal %}

  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for project in sorted_projects %}
      {% include projects_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in sorted_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
  {% endif %}
{% endif %}
</div>
