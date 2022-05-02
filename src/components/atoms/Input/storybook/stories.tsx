import { Story } from '@storybook/react'
import Input from '..'
import { InputProps } from '../types'

const Template: Story<InputProps> = args => <Input {...args} />

export const Default = Template.bind({})
