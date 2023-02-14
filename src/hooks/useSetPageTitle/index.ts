import { useLayoutEffect } from 'react'
import { UseSetPageTitleProps } from './types'

export const useSetPageTitle = ({ pageTitle }: UseSetPageTitleProps): void => {
  useLayoutEffect(() => {
    document.title = pageTitle
  }, [pageTitle])
}
