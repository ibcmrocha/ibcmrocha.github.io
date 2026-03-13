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
    Predictions of the biaxial (normal/shear) behavior of fiber-reinforced composites coming from expensive micromechanics (<i>Micromodel</i>), hyper-reduced ROMs untrained for this specific case (<i>Untrained hyper-reduced</i>) and feedforward neural nets untrained for this case (<i>Untrained network</i>). Results from a classical physics-based <i>Mesomodel</i> that cannot capture biaxiality also included.
</div>

We also used all techniques in an FE$^2$ example to showcase their runtimes:

|             | Full-order | Mesomodel | Neural net | Hyper-reduced ROM |
| ------------|------------|-----------|------------|-------------------|
| Runtime [s] | 726500     | 2.2       | 10.8       | 2692              |
| Speed-up [-]|            | 329478    | 67393      | 270               |
| ------------|------------|-----------|------------|-------------------|

The promising machine learning speed-ups motivated me to look for ways to solve the extrapolation problem. You can see one of them below (active learning) and another in the [hybrid models page]({% link _projects/hybrids.md %}).

## Building surrogate models on the fly

One way to guarantee accurate predictions in extrapolation is to build ML surrogates that **provide uncertainty metrics** together with their predictions. In {% cite rochaOntheflyConstructionSurrogate2021 %} we use Gaussian Processes (GPs) for that. We start our simulations with a completely untrained model and the constitutive behavior is learned from just a few micromodels as the macroscale structure is loaded. Accuracy is guaranteed by rejecting the surrogate prediction if its epistemic uncertainty is too high.

<div class="row align-items-center">
    <div class="col-sm mt-3 mt-md-0 d-flex align-items-center justify-content-center">
        {% include figure.liquid loading="eager" path="assets/research/surrogates/gpscheme.png" title="GP scheme" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    My active learning approach for multiscale simulations: a GP model learns consitutive behavior on the fly and just a few micromodels are executed during the simulation.
</div>

In {% cite rochaAdaptiveDomainbasedPOD2020 %} we also present an adaptive acceleration scheme but this time relying on projection-based ROMs and their hyper-reduced versions (in this case ECM). The simulation domain is adaptively decomposed into fully-solved parts, POD domains and hyper-reduced domains, with the reduced basis being updated on the fly with a few fully-solved steps:

<div class="row align-items-center">
    <div class="col-sm mt-3 mt-md-0 d-flex align-items-center justify-content-center">
        {% include figure.liquid loading="eager" path="assets/research/surrogates/gpscheme.png" title="GP scheme" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    My active learning approach for multiscale simulations: a GP model learns consitutive behavior on the fly and just a few micromodels are executed during the simulation.
</div>

## Combining different surrogates on the same model

More recently, I developed together with my PhD Joep Storm and [Waiching Sun](https://scholar.google.com/citations?user=_0SbGQcAAAAJ&hl=en) a phase-field-based approach for combining surrogate models on the same mesh. The key idea is a synthesis from the previous two approaches: the material behavior in some parts of the domain are computed with an uncertainty-aware surrogate (a GP in our case) while the remaining parts are fully solved. We then use a phase field to help us define how these regions evolve during the simulation and what happens at a smooth interface between them where the models are mixed {% cite storm2025mixingdatadrivenphysicsbasedconstitutive %}

<div class="row align-items-center">
    <div class="col-sm mt-3 mt-md-0 d-flex align-items-center justify-content-center">
        {% include figure.liquid loading="eager" path="assets/research/surrogates/phasefield.png" title="Phase field 1" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/publication_preview/phasefield.gif" title="Phase field 2" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    We use a phase field formulation to help us smoothly mix a high-fidelity constitutive model ($\mathcal{C}_\mathrm{HF}$) with a cheap uncertainty-aware surrogate ($\mathcal{C}_\mathrm{GP}$). On the right an example of how the fully-solved region evolves during a simulation (notched specimen loaded in tension, with strain localization between the notches).
</div>

## Graph neural networks as surrogates
