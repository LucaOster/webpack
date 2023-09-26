import GlobalStyles from 'ui/globalStyles'
import { type MainProviderProps } from './types'

const MainProvider = ({ children }: MainProviderProps) => (
  <>
    {children}
    <GlobalStyles />
  </>
)

export default MainProvider
