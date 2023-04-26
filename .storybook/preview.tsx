import {MainProvider} from '../src/ui/providers'
import darkMode from './theme'
import viewports from './viewports'

export const parameters = {
  layout: 'centered',
  darkMode,
  viewport: {
    viewports
  }
}

export const decorators = [
  Story => (
    <MainProvider>
      <Story/>
    </MainProvider>
  )
]
