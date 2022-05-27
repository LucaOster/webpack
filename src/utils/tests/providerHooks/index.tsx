import { MainProviders } from 'utils/providers/mainProviders'
import { WrapperProps } from './types'

export const wrapper = ({ children, setTheme }: WrapperProps) => (
  <MainProviders setTheme={setTheme}>{children}</MainProviders>
)
