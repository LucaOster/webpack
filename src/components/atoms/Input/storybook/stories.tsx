import { ComponentMeta, ComponentStory } from '@storybook/react'
import Input from '..'

export default {
  title: 'Atoms/Input',
  component: Input,
  parameters: {
    controls: { sort: 'requiredFirst' }
  }
} as ComponentMeta<typeof Input>

const Template: ComponentStory<typeof Input> = args => (
  <Input {...args} style={{ margin: 0, minWidth: '28rem' }} />
)

export const Basic = Template.bind({})
