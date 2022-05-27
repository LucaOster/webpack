import { useLayoutEffect } from 'react'
import { UseSetPageTitleProps } from './types'

export const useSetPageTitle = ({ pageTitle }: UseSetPageTitleProps): void => {
  useLayoutEffect(
    function setPageTitle() {
      document.title = pageTitle
    },
    [pageTitle]
  )
}
