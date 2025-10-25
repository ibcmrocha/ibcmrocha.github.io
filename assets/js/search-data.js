// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-research",
          title: "research",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/research/";
          },
        },{id: "nav-research",
          title: "research",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/research/";
          },
        },{id: "nav-group",
          title: "group",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/group/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-repositories",
          title: "repositories",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-talks",
          title: "talks",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/talks/";
          },
        },{id: "nav-teaching",
          title: "teaching",
          description: "Coming soon!",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather.html";
            },},{id: "news-started-a-two-month-visit-to-the-complex-materials-group-at-eth-zurich",
          title: 'Started a two-month visit to the Complex Materials group at ETH Zurich.',
          description: "",
          section: "News",},{id: "news-gave-a-talk-to-the-complex-materials-group-at-eth-zurich-slides",
          title: 'Gave a talk to the Complex Materials group at ETH Zurich [slides]',
          description: "",
          section: "News",},{id: "news-gave-a-talk-to-the-computational-mechanics-group-at-eth-zurich-slides",
          title: 'Gave a talk to the Computational Mechanics group at ETH Zurich [slides]',
          description: "",
          section: "News",},{id: "news-new-paper-on-phase-fields-for-surrogate-modeling-now-out-in-ijnme-link",
          title: 'New paper on phase fields for surrogate modeling now out in IJNME! [link]...',
          description: "",
          section: "News",},{id: "people-abhinanda-ravikumar",
          title: 'Abhinanda Ravikumar',
          description: "",
          section: "People",handler: () => {
              window.location.href = "/people/abhinanda-ravikumar/";
            },},{id: "people-andres-martinez-colan",
          title: 'Andres Martinez Colan',
          description: "",
          section: "People",handler: () => {
              window.location.href = "/people/andres-martinez/";
            },},{id: "people-anne-poot",
          title: 'Anne Poot',
          description: "",
          section: "People",handler: () => {
              window.location.href = "/people/anne-poot/";
            },},{id: "people-christiaan-bakker",
          title: 'Christiaan Bakker',
          description: "",
          section: "People",handler: () => {
              window.location.href = "/people/christiaan-bakker/";
            },},{id: "people-daan-smolders",
          title: 'Daan Smolders',
          description: "",
          section: "People",handler: () => {
              window.location.href = "/people/daan-smolders/";
            },},{id: "people-georgi-nikolov",
          title: 'Georgi Nikolov',
          description: "",
          section: "People",handler: () => {
              window.location.href = "/people/georgi-nikolov/";
            },},{id: "people-iuri-rocha",
          title: 'Iuri Rocha',
          description: "",
          section: "People",handler: () => {
              window.location.href = "/people/iuri-rocha/";
            },},{id: "people-jasmijn-van-riggelen",
          title: 'Jasmijn van Riggelen',
          description: "",
          section: "People",handler: () => {
              window.location.href = "/people/jasmijn-msc/";
            },},{id: "people-jesse-metz",
          title: 'Jesse Metz',
          description: "",
          section: "People",handler: () => {
              window.location.href = "/people/jesse-metz/";
            },},{id: "people-joep-storm",
          title: 'Joep Storm',
          description: "",
          section: "People",handler: () => {
              window.location.href = "/people/joep-storm-msc/";
            },},{id: "people-joep-storm",
          title: 'Joep Storm',
          description: "",
          section: "People",handler: () => {
              window.location.href = "/people/joep-storm/";
            },},{id: "people-knut-tjensvoll",
          title: 'Knut Tjensvoll',
          description: "",
          section: "People",handler: () => {
              window.location.href = "/people/knut-tjensvoll/";
            },},{id: "people-leon-riccius",
          title: 'Leon Riccius',
          description: "",
          section: "People",handler: () => {
              window.location.href = "/people/leon-riccius/";
            },},{id: "people-marina-maia",
          title: 'Marina Maia',
          description: "",
          section: "People",handler: () => {
              window.location.href = "/people/marina-maia/";
            },},{id: "people-nora-kovacs",
          title: 'Nora Kovacs',
          description: "",
          section: "People",handler: () => {
              window.location.href = "/people/nora-kovacs-msc/";
            },},{id: "people-nora-kovacs",
          title: 'Nora Kovacs',
          description: "",
          section: "People",handler: () => {
              window.location.href = "/people/nora-kovacs/";
            },},{id: "people-pascalle-essed",
          title: 'Pascalle Essed',
          description: "",
          section: "People",handler: () => {
              window.location.href = "/people/pascalle-essed/";
            },},{id: "people-paul-van-ijzendoorn",
          title: 'Paul van IJzendoorn',
          description: "",
          section: "People",handler: () => {
              window.location.href = "/people/paul-vanijzendoorn/";
            },},{id: "people-renan-melo",
          title: 'Renan Melo',
          description: "",
          section: "People",handler: () => {
              window.location.href = "/people/renan-melo/";
            },},{id: "people-rik-hendriks",
          title: 'Rik Hendriks',
          description: "",
          section: "People",handler: () => {
              window.location.href = "/people/rik-hendriks/";
            },},{id: "people-robbie-van-leeuwen",
          title: 'Robbie van Leeuwen',
          description: "",
          section: "People",handler: () => {
              window.location.href = "/people/robbie-vanleeuwen/";
            },},{id: "people-ruben-van-gils",
          title: 'Ruben van Gils',
          description: "",
          section: "People",handler: () => {
              window.location.href = "/people/ruben-vangils/";
            },},{id: "people-taylan-turan",
          title: 'Taylan Turan',
          description: "",
          section: "People",handler: () => {
              window.location.href = "/people/taylan-turan/";
            },},{id: "people-uri-peker",
          title: 'Uri Peker',
          description: "",
          section: "People",handler: () => {
              window.location.href = "/people/uri-peker/";
            },},{id: "people-yunfan-zhang",
          title: 'Yunfan Zhang',
          description: "",
          section: "People",handler: () => {
              window.location.href = "/people/yunfan-zhang/";
            },},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project.html";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project.html";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project.html";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project.html";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project.html";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project.html";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project.html";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project.html";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project.html";
            },},{id: "projects-hybrid-machine-learning",
          title: 'hybrid machine learning',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/hybrids.html";
            },},{id: "talks-surrogate-models-for-fe2-classic-mesoscale-modeling-pre-trained-data-driven-models-physics-informed-subspace-projection-and-probabilistic-active-learning",
          title: 'Surrogate models for FE2: Classic mesoscale modeling, pre-trained data-driven models, physics-informed subspace projection...',
          description: "",
          section: "Talks",handler: () => {
              window.location.href = "/talks/wccm20/";
            },},{id: "talks-surrogate-models-for-fe2-classic-mesoscale-modeling-pre-trained-data-driven-models-physics-informed-subspace-projection-and-probabilistic-active-learning",
          title: 'Surrogate models for FE2: Classic mesoscale modeling, pre-trained data-driven models, physics-informed subspace projection...',
          description: "",
          section: "Talks",handler: () => {
              window.location.href = "/talks/comp21/";
            },},{id: "talks-learning-physics-based-material-models-for-multiscale-solid-mechanics",
          title: 'Learning physics-based material models for multiscale solid mechanics',
          description: "",
          section: "Talks",handler: () => {
              window.location.href = "/talks/mmldt21/";
            },},{id: "talks-learning-physics-based-material-models-for-multiscale-solid-mechanics",
          title: 'Learning physics-based material models for multiscale solid mechanics',
          description: "",
          section: "Talks",handler: () => {
              window.location.href = "/talks/eccomas22/";
            },},{id: "talks-trends-and-challenges-in-machine-learning",
          title: 'Trends and Challenges in Machine Learning',
          description: "",
          section: "Talks",handler: () => {
              window.location.href = "/talks/emsymp22/";
            },},{id: "talks-bias-variance-tradeoff-in-accelerating-multiscale-solid-mechanics-model-order-reduction-and-machine-learning",
          title: 'Bias-variance tradeoff in accelerating multiscale solid mechanics: Model Order Reduction and machine learning...',
          description: "",
          section: "Talks",handler: () => {
              window.location.href = "/talks/goteborg23/";
            },},{id: "talks-machine-learning-of-evolving-material-models-for-concurrent-multiscale-modeling",
          title: 'Machine learning of evolving material models for concurrent multiscale modeling',
          description: "",
          section: "Talks",handler: () => {
              window.location.href = "/talks/cfrac23/";
            },},{id: "talks-learning-evolving-physics-based-material-models-for-multiscale-solid-mechanics",
          title: 'Learning evolving physics-based material models for multiscale solid mechanics',
          description: "",
          section: "Talks",handler: () => {
              window.location.href = "/talks/esmc22/";
            },},{id: "talks-machine-learning-of-evolving-material-models-for-concurrent-multiscale-modeling",
          title: 'Machine learning of evolving material models for concurrent multiscale modeling',
          description: "",
          section: "Talks",handler: () => {
              window.location.href = "/talks/comp23/";
            },},{id: "talks-bias-variance-tradeoff-in-accelerating-multiscale-solid-mechanics-model-order-reduction-and-machine-learning",
          title: 'Bias-variance tradeoff in accelerating multiscale solid mechanics: Model Order Reduction and machine learning...',
          description: "",
          section: "Talks",handler: () => {
              window.location.href = "/talks/porto23/";
            },},{id: "talks-accelerating-multiscale-modeling-of-delamination",
          title: 'Accelerating multiscale modeling of delamination',
          description: "",
          section: "Talks",handler: () => {
              window.location.href = "/talks/eccomas24/";
            },},{id: "talks-hybrid-surrogate-modeling-for-multiscale-simulations-with-physically-recurrent-neural-networks",
          title: 'Hybrid surrogate modeling for multiscale simulations with Physically Recurrent Neural Networks',
          description: "",
          section: "Talks",handler: () => {
              window.location.href = "/talks/iop24/";
            },},{id: "talks-hybrid-surrogate-modeling-for-multiscale-simulations-with-physically-recurrent-neural-networks",
          title: 'Hybrid surrogate modeling for multiscale simulations with Physically Recurrent Neural Networks',
          description: "",
          section: "Talks",handler: () => {
              window.location.href = "/talks/goteborg25/";
            },},{id: "talks-microscale-modeling-of-creep-and-fatigue-in-composites-viscoplasticity-cohesive-damage-and-time-homogenization",
          title: 'Microscale modeling of creep and fatigue in composites: viscoplasticity, cohesive damage and time...',
          description: "",
          section: "Talks",handler: () => {
              window.location.href = "/talks/cfrac25/";
            },},{id: "talks-simulating-material-behavior-across-the-scales",
          title: 'Simulating material behavior across the scales',
          description: "",
          section: "Talks",handler: () => {
              window.location.href = "/talks/zurich25/";
            },},{id: "talks-hybrid-surrogate-modeling-with-physically-recurrent-neural-networks",
          title: 'Hybrid surrogate modeling with Physically Recurrent Neural Networks',
          description: "",
          section: "Talks",handler: () => {
              window.location.href = "/talks/eth_laura/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%69.%72%6F%63%68%61@%74%75%64%65%6C%66%74.%6E%6C", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/SLIMM-Lab", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0001-8410-3741", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=AqNDAOoAAAAJ", "_blank");
        },
      },{
        id: 'social-work',
        title: 'Work',
        section: 'Socials',
        handler: () => {
          window.open("https://www.tudelft.nl/citg/over-faculteit/afdelingen/materials-mechanics-management-design-3md/sections-labs/applied-mechanics/staff/dr-i-iuri-bcm-rocha", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
