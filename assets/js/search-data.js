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
        },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-teaching",
          title: "teaching",
          description: "Coming soon!",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather.html";
            },},{id: "news-started-a-two-month-visit-to-the-complex-materials-group-at-eth-zurich",
          title: 'Started a two-month visit to the Complex Materials group at ETH Zurich.',
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
