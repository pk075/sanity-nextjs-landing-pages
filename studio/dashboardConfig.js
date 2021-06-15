export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '60c89f361466ad22f8f8d97d',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-a995wrr5',
                  apiId: '050425af-5013-4b93-a441-9c5a44e93ba6'
                },
                {
                  buildHookId: '60c89f36a022d508811286fa',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-qa86ujw7',
                  apiId: '3e5f3912-dd9f-48dc-b35d-adb15a372ab4'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/pk075/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-qa86ujw7.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
