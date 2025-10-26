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

## Physically Recurrent Neural Networks

Starting with the PhD of Marina Maia, we developed **Physically Recurrent Neural Networks** {% cite MAIA2023115934 %}. PRNNs are special hybrid neural architectures for mapping homogenized strains to homogenized stresses that include **intact constitutive models** in a latent layer. The encoder before the latent layer acts as a de-homogenization operator, mapping homogenized strains to local strains at a set of *fictitious material points*. The decoder then combines the stresses from the points into a homogenized value, in an operation analogous to homogenization.

By embedding intact models we mean that inside the latent layer we use a completely intact constitutive model code:

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/research/prnn/j2model.jpg" title="J2 model in a PRNN" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    A Von Mises plasticity model embedded in a PRNN.
</div>

asdf

<div class="card p-3 mb-4">
  <h3 class="mb-2">A tiny PRNN sandbox</h3>
  <p class="text-muted mb-3">Interactive visualization showing weights, stress–strain plots, and plastic strain components across epochs.</p>
  {% include research-prnn.html %}
</div>

## Evolving material models
