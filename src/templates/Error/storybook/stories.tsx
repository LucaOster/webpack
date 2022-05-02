import { Story } from '@storybook/react'
import Error from '..'
import { ErrorProps } from '../types'

const Template: Story<ErrorProps> = args => (
  <Error {...args}>
    <h1>Render Children</h1>
  </Error>
)

export const Default = Template.bind({})
