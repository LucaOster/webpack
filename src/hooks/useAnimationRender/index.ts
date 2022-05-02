import { useCallback, useEffect, useState } from 'react'

export const useAnimationRender = ({ timeMilSecToRemoveComponent = 0 }) => {
  const [isRenderComponent, setIsRenderComponent] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    isRenderComponent && setIsVisible(true)
  }, [isRenderComponent])

  const changeVisibility = useCallback(() => {
    setIsVisible(false)
    setTimeout(() => setIsRenderComponent(false), timeMilSecToRemoveComponent)
  }, [timeMilSecToRemoveComponent])

  const changeStateComponent = useCallback(() => {
    setIsRenderComponent(true)
    isRenderComponent && changeVisibility()
  }, [changeVisibility, isRenderComponent])

  return {
    isRenderComponent,
    isVisible,
    changeStateComponent
  }
}
