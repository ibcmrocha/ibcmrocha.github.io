---
layout: page
title: hybrid physics-data modeling
description: 
img: assets/img/project_covers/hybrids.png
importance: 1
category: tools
related_publications: true
---

I work on combining intact physics-based models and machine learning architectures, in a paradigm analogous to Differential Programming ($\partial P$).

## PRNNs

Starting with the PhD of Marina Maia, we developed **Physically Recurrent Neural Networks** {% cite MAIA2023115934 %}. PRNNs are special hybrid neural architectures for mapping homogenized strains to homogenized stresses that include **intact constitutive models** in a latent layer. The encoder before the latent layer acts as a de-homogenization operator, mapping homogenized strains to local strains at a set of *fictitious material points*. The decoder then combines the stresses from the points into a homogenized value, in an operation analogous to homogenization.

<div class="card p-3 mb-4">
  <h3 class="mb-2">A tiny PRNN sandbox</h3>
  <p class="text-muted mb-3">Interactive visualization showing weights, stress–strain plots, and plastic strain components across epochs.</p>
  {% include research-prnn.html %}
</div>

## Evolving material models
