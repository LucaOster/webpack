const atomicDesignLayers = [
  {
    name: 'Atom',
    value: 'atoms'
  },
  {
    name: 'Molecule',
    value: 'molecules'
  },
  {
    name: 'Organism',
    value: 'organisms'
  },
  {
    name: 'Template',
    value: 'templates'
  }
]

module.exports = plop => {
  const component = `../src/ui/components/{{component_level}}/{{pascalCase name}}`

  return plop.setGenerator('components', {
    description: `Create a Component`,
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Name of your component?'
      },
      {
        type: 'list',
        name: 'component_level',
        message: 'What is the level of your component?',
        choices: atomicDesignLayers
      }
    ],
    actions: [
      {
        type: 'add',
        path: `${component}/index.tsx`,
        templateFile: 'templates/component.tsx.hbs'
      },
      {
        type: 'add',
        path: `${component}/styles.ts`,
        templateFile: 'templates/styles.ts.hbs'
      },
      {
        type: 'add',
        path: `${component}/storybook/stories.tsx`,
        templateFile: 'templates/stories.tsx.hbs'
      },
      {
        type: 'add',
        path: `${component}/__tests__/test.tsx`,
        templateFile: 'templates/test.tsx.hbs'
      },
      {
        type: 'add',
        path: `${component}/types.ts`,
        templateFile: 'templates/types.ts.hbs'
      }
    ]
  })
}
