---
layout: page
title: bayesian machine learning
description: 
img: assets/img/project_covers/bayes.png
importance: 1
category: tools
related_publications: true
---

I work on developing tools for **making Bayesian inference practical for computational mechanics**. These problems arise on a number of real-life applications that are often too cumbersome or error prone:

- Inferring model parameters (e.g material properties) from noisy measurements coming from experiments
- Monitoring existing structures and detecting hidden defects which might cause failure
- Estimating the error of approximate numerical techniques

For all of the above, deterministic approaches are often ill-posed and uninformed, while conventional Bayesian inference is extremely slow (e.g forward Monte Carlo, MCMC). I develop tools for obtaining posterior distributions that are both:

- (i) computationally efficient when the forward model is a PDE solved approximately on a complex domain
- (ii) statistically consistent about the sources of epistemic uncertainty (prior beliefs versus observation noise versus numerical error)

## Piecewise Deterministic Markov Processes (PDMPs)

When the likelihood function requires solving a PDE, standard MCMC can become impractical: most steps are wasted due to random-walk behavior, and each likelihood/gradient evaluation is costly. **PDMPs** provide an appealing alternative because they can explore posteriors with fewer correlated samples per likelihood evaluation. The key idea is to explore the inference space with *deterministic dynamics* that can however *change directions at random times*. With this we can explore whole lines in parameter space rather than single points:

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/research/pdmp/rwm.gif" title="Conventional MCMC" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/research/pdmp/zz.gif" title="Zig-zag sampler" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/research/pdmp/bps.gif" title="Bouncy Particle sampler" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Inferring two PDE parameters with conventional Random Walk MCMC (left), the Zig-zag sampler (middle), and the Bouncy Particle sampler (right) 
</div>
