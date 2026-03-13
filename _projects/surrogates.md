---
layout: page
title: surrogate modeling
description: 
img: assets/img/project_covers/surrogates.png
importance: 1
category: tools
related_publications: true
---

I work on many flavors of surrogate modeling for solid mechanics, especially in a multiscale (FE$^2$) setting. Multiscale simulations can take weeks to run depending on the problem, and surrogate models can be used to dramatically accelerate them.

## Comparing surrogate model approaches

I worked together with [Pierre Kerfriden](https://scholar.google.nl/citations?user=EV2wmsgAAAAJ&hl=nl) during my postdoc to compare several surrogate modeling alternatives for multiscale simulations of composite materials {% cite ROCHA2020103995 %}. At the time there was no clear winner: classical physics-based mesomodels are the quickest alternative but their intrinsic assumptions are quite limiting; neural networks are also very fast but cannot extrapolate to unseen scenarios; hyper-reduced ROMs can extrapolate quite well but have limited speed-ups:

<div class="row align-items-center">
    <div class="col-sm mt-3 mt-md-0 d-flex align-items-center justify-content-center">
        {% include figure.liquid loading="eager" path="assets/research/surrogates/biax1.png" title="Biax 1" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/research/surrogates/biax2.png" title="Biax 2" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Predictions of the biaxial (normal/shear) behavior of fiber-reinforced composites coming from expensive micromechanics (*Micromodel*), hyper-reduced ROMs untrained for this specific case (*Untrained hyper-reduced*) and feedforward neural nets untrained for this case (*Untrained network*). Results from a classical physics-based *Mesomodel* that cannot capture biaxiality also included.
</div>

We also used all techniques in an FE$^2$ example to showcase their runtimes:

|             | Full-order | Mesomodel | Neural net | Hyper-reduced ROM |
| ------------|------------|-----------|------------|-------------------|
| Runtime [s] | 726500     | 2.2       | 10.8       | 2692              |
| Speed-up [-]|            | 329478    | 67393      | 270               |

The promising machine learning speed-ups motivated me to look for ways to solve the extrapolation problem. You can see one of them below (active learning) and another in the [hybrid models page]({{'/projects/hybrids/' | relative_url }})

## Building surrogate models on the fly

## Combining different surrogates on the same model

## Graph neural networks as surrogates
