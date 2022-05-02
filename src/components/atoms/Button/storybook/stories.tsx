import { Story } from '@storybook/react'
import Button from '..'
import { BtnProps } from '../types'

export const Template: Story<BtnProps> = args => <Button {...args} />

export const Default = Template.bind({})
