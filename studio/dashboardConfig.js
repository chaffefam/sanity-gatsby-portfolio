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
                  buildHookId: '610e53084e6ed7bc2d2d78c8',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-6jfb39nv',
                  apiId: '891634d1-5a56-4965-8cdd-f84b46c047c3'
                },
                {
                  buildHookId: '610e53084f319ff830fcea91',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-6a5icndu',
                  apiId: '0e9db597-6735-4d9c-b938-611e04badcab'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/chaffefam/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-6a5icndu.netlify.app',
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
