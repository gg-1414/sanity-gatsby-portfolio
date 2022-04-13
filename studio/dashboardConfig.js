export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6256266150a2b80cecb648fa',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-nqx9t182',
                  apiId: '3e7a6077-0fdf-46fb-9821-dba97f467256'
                },
                {
                  buildHookId: '625626610172a40d098e0185',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-n36hsk3k',
                  apiId: 'ea59f016-b7b7-4f82-8676-6924268278b5'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/gg-1414/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-n36hsk3k.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
