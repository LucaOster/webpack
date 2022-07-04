const components = ['atoms', 'molecules', 'organisms']
const template = `../src/ui/components/templates/{{pascalCase name}}`
const type = 'add'
const page = `../src/ui/pages/{{pascalCase name}}`
const prompts = [
  {
    type: 'input',
    name: 'name',
    message: 'What is your component name?'
  }
]

module.exports = plop => {
  components.map(el => {
    const component = `../src/ui/components/${el}/{{pascalCase name}}`

    return plop.setGenerator(el, {
      description: `Create a ${el}`,
      prompts,
      actions: [
        {
          type,
          path: `${component}/index.tsx`,
          templateFile: 'templates/component.tsx.hbs'
        },
        {
          type,
          path: `${component}/styles.ts`,
          templateFile: 'templates/styles.ts.hbs'
        },
        {
          type,
          path: `${component}/storybook/stories.tsx`,
          templateFile: 'templates/stories.tsx.hbs'
        },
        {
          type,
          path: `${component}/__tests__/test.tsx`,
          templateFile: 'templates/test.tsx.hbs'
        },
        {
          type,
          path: `${component}/types.ts`,
          templateFile: 'templates/types.ts.hbs'
        }
      ]
    })
  })

  plop.setGenerator('templates', {
    description: `Create a templates`,
    prompts,
    actions: [
      {
        type,
        path: `${template}/index.tsx`,
        templateFile: 'templates/template.tsx.hbs'
      },
      {
        type,
        path: `${template}/styles.ts`,
        templateFile: 'templates/styles.ts.hbs'
      },
      {
        type,
        path: `${template}/__tests__/test.tsx`,
        templateFile: 'templates/test.tsx.hbs'
      }
    ]
  })

  plop.setGenerator('pages', {
    description: `Create a pages`,
    prompts,
    actions: [
      {
        type,
        path: `${page}/index.tsx`,
        templateFile: 'templates/page.tsx.hbs'
      },
      {
        type,
        path: `${page}/styles.ts`,
        templateFile: 'templates/styles.ts.hbs'
      },
      {
        type,
        path: `${page}/__tests__/test.tsx`,
        templateFile: 'templates/test.tsx.hbs'
      }
    ]
  })
}
