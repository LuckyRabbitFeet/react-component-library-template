import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Logo } from './logo';
import './styles'

export default {
  title: 'Components/Button',
  component: Logo,
} as ComponentMeta<typeof Logo>;

const Template: ComponentStory<typeof Logo> = (args) => <Logo {...args} />;

export const Primary = Template.bind({});

