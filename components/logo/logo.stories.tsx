import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Logo } from './logo'
import './styles'

const LogoMeta: ComponentMeta<typeof Logo> = {
  title: 'Components/Button',
  component: Logo,
}

export default LogoMeta

const Template: ComponentStory<typeof Logo> = (args) => <Logo {...args} />

export const Primary = Template.bind({})
