import { useThemeDetect } from 'hooks'
import { ThemeProvidersProps } from './types'

export const ThemeProviders = ({ children }: ThemeProvidersProps) => {
  useThemeDetect()

  return <>{children}</>
}
