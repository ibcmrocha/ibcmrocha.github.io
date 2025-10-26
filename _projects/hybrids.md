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
        {% include figure.liquid loading="eager" path="assets/research/prnn/j2model.png" title="J2 model in a PRNN" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    A Von Mises plasticity model embedded in a PRNN.
</div>

which can therefore also be seen as a custom activation function. But as you can see above the complete model is in there, including the Newton-based return mapping and proper management of internal variables. This has clear advantages compared to conventional architectures (e.g. an RNN):

- Latent values inside the network gain clear physical interpratation: strains and stresses
- The "memory" of the layer is managed exclusively by the physical models and does not need to be relearned. This means we can capture unloading without training for it
- Material properties go directly into the embedded models and skip the encoder altogether. This opens the possibility of transferring to different material properties without retraining, altogether avoiding the curse of dimensionality

You can play with a few PRNNs in the following widget. Here the PRNN is trained with a few monotonic strain paths and can complex non-proportional and non-monotonic strain paths with high accuracy. Change the time step slider to see how internal variables inside the latent layer are evolving, change the epoch slider to see how encoder/decoder weights change during training:

<div class="card p-3 mb-4">
  <h3 class="mb-2">A tiny PRNN sandbox</h3>
  <p class="text-muted mb-3">Interactive visualization showing weights, stress–strain plots, and plastic strain components across epochs.</p>
  {% include research-prnn.html %}
</div>

We have extended this model to finite-strain viscoplasticity {% cite MAMAIA2024105145 %} and a combination of plasticity and distributed damage { % cite KOVACS2025105668 %}. More recently we also experimented with different levels of decoder sparsity and managed to train highly-accurate models with as few as five short GP paths:

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/research/prnn/decoders.png" title="Different PRNN decoders" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    PRNNs with special decoder architectures can learn with extremely small datasets.
</div>

## Evolving material models
