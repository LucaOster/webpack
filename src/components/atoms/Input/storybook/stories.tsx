import { Story } from '@storybook/react'
import Input from '..'
import { InputProps } from '../types'

const Template: Story<InputProps> = args => (
  <Input {...args} style={{ margin: 0, minWidth: '28rem' }} />
)

export const Default = Template.bind({})
