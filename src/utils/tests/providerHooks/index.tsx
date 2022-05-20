import { MainProviders } from 'utils/providers/mainProviders'
import { ChildrenType } from './types'

export const wrapper = ({ children }: ChildrenType) => (
  <MainProviders>{children}</MainProviders>
)
