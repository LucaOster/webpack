import { useCallback } from 'react'
import { useRenderingByWindowSize } from 'hooks'
import * as S from './styles'

const RenderTextByBreakpoint = () => {
  const { windowSize } = useRenderingByWindowSize()

  const renderTextByBreakpoint = useCallback(() => {
    if (windowSize.lg) return 'Breakpoint Desktop, "lg": 1024px - ∞px'
    if (windowSize.md) return 'Breakpoint Tablet, "md": 600px - 1023px'
    if (windowSize.sm) return 'Breakpoint Mobile, "sm": 0px - 599px'
    return ''
  }, [windowSize.lg, windowSize.md, windowSize.sm])

  return (
    <S.Wrapper>
      <h3>
        Resize the browser window to view the rendered text for each breakpoint!
      </h3>

      <br />
      <h1>{renderTextByBreakpoint()}</h1>
    </S.Wrapper>
  )
}

export default RenderTextByBreakpoint
