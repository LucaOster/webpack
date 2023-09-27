import type { Preview } from '@storybook/react'
import viewports from './viewports'
import MainProvider from '../src/ui/providers/mainProvider'
import './style.css'

const preview: Preview = {
  decorators: [
    (Story) => (
      <MainProvider>
        <Story />
      </MainProvider>
    )
  ],
  parameters: {
    backgrounds: {
      default: 'dark'
    },
    viewport: {
      viewports
    },
    actions: {argTypesRegex: '^on[A-Z].*'},
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    },
    layout: 'centered'
  }
}

export default preview
