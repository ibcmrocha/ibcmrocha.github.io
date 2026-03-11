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

I collaborate with [Joris Bierkens](https://scholar.google.nl/citations?hl=nl&user=JlAi6VAAAAAJ) and [Hanne Kekkonen](https://scholar.google.nl/citations?user=wxsxtq4AAAAJ&hl=nl), the statistical learning experts who develop these samplers, in applying PDMPs for real-world problems. In a recent publication by our PhD candidate Leon Riccius {% cite riccius2026piecewisedeterministicmarkovprocesses %} we develop an approach for using PDMPs to infer PDE parameters (e.g material properties with a FEM model and experimental measurements). Since FEM is much more messy than the usual well-behaved distributions Joris and Hanne use to develop the samplers, we came up with a way to still make it work by combining Poisson Thinning with a GP-based surrogate model that approximates the gradient of the log posterior being learned. Our approach extends the applicability of PDMPs to a much wider range of problems, and for PDE parameters in computational mechanics we actually find our PDMPs outperform state-of-the-art NUTS (*No U-Turn Sampler*) implementations:

<div class="row">
    <div class="col-12 col-md-8 col-lg-6 mx-auto mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="/assets/research/pdmp/ess_comparison.png" title="PDMP ESS comparison" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Effective sample size per likelihood evaluation (higher is better). Comparison between a simple Random Walk Metropolis (RMW), the No U-Turn Sampler (NUTS) and our Zig-Zag sampler (ZZ) and Bouncy Particle sampler (BPS). We consistently outperform NUTS for a wide range of dimensionalities, which means we require much fewer expensive FEM model evaluations but still obtain accurate inference results.
</div>

You can play with our approach by using the following interactive plot. You can move the means of the Gaussian mixture that makes up the ground truth posterior to generate more challenging multi-modal problems:

<!-- <div class="card p-3 mb-4"> -->
<!--   <h3 class="mb-2">A tiny PDMP sandbox</h3> -->
<!--   <p class="text-muted mb-3">Try out our surrogate-enhanced Zig-zag sampler implementation in a non-Gaussian problem:</p> -->
<!--   {% include research-pdmp.html %} -->
<!-- </div> -->

<!-- <div style="width: 100%; max-width: 900px; margin: 0 auto;">   <iframe     src="{{ '/assets/html/research-pdmp.html' | relative_url }}"     width="100%"     height="760"     style="border: none; display: block;"     loading="lazy">   </iframe> </div> -->

<div style="max-width: 900px; margin: 0 auto;">   <div style="position: relative; width: 100%; padding-top: 74%;">     <iframe       src="{{ '/assets/html/research-pdmp.html' | relative_url }}"       style="position: absolute; inset: 0; width: 100%; height: 100%; border: none;"       loading="lazy">     </iframe>   </div> </div>

## The Bayesian Finite Element Method

Even when likelihood computations are computationally cheap, posterior distributions can still be misleading if we ignore the fact that our PDE solution is only available through a discretization, and therefore carries an error with it. In practice for FEM, this translates into biased and overconfident posteriors. A simple example can be seen below for a 1D pullout bar model:

<div class="row align-items-center">
    <div class="col-sm mt-3 mt-md-0 d-flex align-items-center justify-content-center">
        {% include figure.liquid loading="eager" path="assets/research/bfem/bar.png" title="Bar problem" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/research/bfem/bar_fem.png" title="FEM inference" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    A simple 1D inference problem with two parameters (left) and results using MCMC with a FEM likelihood for different element sizes ($h$). Compared to the exact posterior (dashed line), coarse FEM meshes severely bias the posterior and makes it overconfident enough that it completely ignores the prior (gray samples).
</div>


Together with [Pierre Kerfriden](https://scholar.google.nl/citations?user=EV2wmsgAAAAJ&hl=nl) and our PhD Anne Poot, we develop a new approach for representing FEM discretization error as a Bayesian epistemic uncertainty {% cite pootBayesianApproachModeling2024 %}. The key idea is to introduce **two meshes with different levels of discretization**: we set up a prior distribution over a fine mesh and condition the solution on the shape functions of a coarse mesh. The result is a mean response that is exactly the coarse FEM solution and a variance orthogonal to the coarse function solution space. 

By properly propagating the uncertainty over the discretization error, our inference results look much more sane than conventional FEM and we also outperform other recent methods for propagating FEM uncertainty {% cite poot2025bayesianfiniteelementmethod %}:

<div class="row align-items-center">
    <div class="col-sm mt-3 mt-md-0 d-flex align-items-center justify-content-center">
        {% include figure.liquid loading="eager" path="assets/research/bfem/bar_bfem.png" title="BFEM inference" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/research/bfem/bar_rmfem.png" title="RM-FEM inference" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/research/bfem/bar_statfem.png" title="StatFEM inference" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
   The same 1D inference problem as above, but now with our Bayesian FEM method (left) and also including a comparison with Random mesh FEM (middle) and the Statistical Finite Element Method (right).
</div>

And of course we can also treat 2D/3D problems in more complicated settings, like inferring the location of a defect:

<div class="row align-items-center">
    <div class="col-sm mt-3 mt-md-0 d-flex align-items-center justify-content-center">
        {% include figure.liquid loading="eager" path="assets/research/bfem/beam_fem.gif" title="Beam with a hole (FEM)" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/research/bfem/beam_bfem.gif" title="Beam with a hole (BFEM)" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
   Inferring the location of a void in a three-point bending test by observing only the displacements at the boundaries. FEM (left) and BFEM (right) results side by side, showing the samples from the posterior distribution obtained with MCMC. The true location of the defect is shown with a dashed line. FEM with a coarse mesh gets stuck in a non-existing posterior mode and gets the location of the hole completely wrong.
</div>

