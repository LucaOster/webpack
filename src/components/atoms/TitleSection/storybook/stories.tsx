import { ComponentMeta, ComponentStory } from '@storybook/react'
import TitleSection from '..'

export default {
  title: 'Atoms/TitleSection',
  component: TitleSection,
  parameters: {
    controls: { sort: 'requiredFirst' }
  }
} as ComponentMeta<typeof TitleSection>

const Template: ComponentStory<typeof TitleSection> = args => (
  <TitleSection {...args} title="This is an example title" />
)

export const Basic = Template.bind({})
