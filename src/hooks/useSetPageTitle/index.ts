import { useLayoutEffect } from 'react'
import { type UseSetPageTitleProps } from './types'

const useSetPageTitle = ({ pageTitle }: UseSetPageTitleProps): void => {
  useLayoutEffect(() => {
    document.title = pageTitle
  }, [pageTitle])
}

export default useSetPageTitle
