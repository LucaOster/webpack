import { ComponentMeta, ComponentStory } from '@storybook/react'
import TitleAnimation from '..'

export default {
  title: 'Molecules/TitleAnimation',
  component: TitleAnimation,
  parameters: {
    controls: { sort: 'requiredFirst' }
  }
} as ComponentMeta<typeof TitleAnimation>

const Template: ComponentStory<typeof TitleAnimation> = () => <TitleAnimation />

export const Default = Template.bind({})
