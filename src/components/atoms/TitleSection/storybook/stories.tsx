import { Story } from '@storybook/react'
import TitleSection from '..'
import { TitleProps } from '../types'

const Template: Story<TitleProps> = args => <TitleSection {...args} />

export const Default = Template.bind({})

Default.args = {
  title: 'This is an example title'
}
