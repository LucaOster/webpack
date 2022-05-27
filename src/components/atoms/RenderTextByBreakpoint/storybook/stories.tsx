import { ComponentMeta, ComponentStory } from '@storybook/react'
import RenderTextByBreakpoint from '..'

export default {
  title: 'Atoms/RenderTextByBreakpoint',
  component: RenderTextByBreakpoint,
  parameters: {
    controls: { sort: 'requiredFirst' }
  }
} as ComponentMeta<typeof RenderTextByBreakpoint>

const Template: ComponentStory<typeof RenderTextByBreakpoint> = () => (
  <RenderTextByBreakpoint />
)

export const Basic = Template.bind({})
