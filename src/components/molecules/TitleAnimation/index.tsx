import { useAnimationRender } from 'hooks'
import * as S from './styles'
import * as C from 'components'

const TitleAnimation = () => {
  const { isRenderComponent, isVisible, changeStateComponent } =
    useAnimationRender({ timeMilSecToRemoveComponent: 1000 })

  return (
    <div>
      {isRenderComponent && (
        <S.TitleAnimation isVisible={isVisible}>
          Animated text on assembly and disassembly
        </S.TitleAnimation>
      )}

      <S.Column>
        <C.Button
          fullWidth={true}
          color="red"
          size="large"
          text="Assemble Animated Component"
          className="btn"
          onClick={changeStateComponent}
          aria-label="Assemble Animated Component"
        />
      </S.Column>
    </div>
  )
}

export default TitleAnimation
