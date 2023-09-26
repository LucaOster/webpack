import type {StorybookConfig} from '@storybook/react-webpack5'

const config: StorybookConfig = {
  stories: ['../src/ui/@(components|templates)/**/storybook/stories.tsx'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
    '@storybook/addon-styling'
  ],
  core: {
    disableTelemetry: true,
    builder: {
      name: '@storybook/builder-webpack5',
      options: {
        fsCache: true
      }
    }
  },
  framework:  '@storybook/react-webpack5',
  webpackFinal: async config => {
    config.resolve?.modules?.push(`${process.cwd()}/src`)
    return config
  },
  docs: {
    autodocs: true
  },
  typescript: {
    check: true
  }
}

export default config
