module.exports = {
  staticDirs: ['../public'],
  stories: ['../src/@(components|templates)/**/storybook/stories.@(js|md|ts)x'],
  addons: [
    '@storybook/addon-essentials',
    'storybook-dark-mode/register',
    'storybook-mobile',
    '@storybook/addon-a11y',
    'storybook-addon-swc'
  ],
  core: {
    builder: 'webpack5'
  },
  webpackFinal: config => {
    config.resolve.modules.push(`${process.cwd()}/src`)
    return config
  },
  previewHead: head => `
    ${head}
    <style>
      #root {
        display: grid !important;
        height: 100% !important;
        width: 100% !important;
        justify-content: center !important;
        align-items: center;
      }

      @media screen and (min-width: 90rem) {
        #root {
          padding: 3rem!important;
        }
      }

      .sbdocs-p {
        font-size: 17px !important;
      }
    </style>
  `,
  reactOptions: { fastRefresh: true }
}
