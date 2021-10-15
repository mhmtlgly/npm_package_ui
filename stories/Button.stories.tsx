import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Button } from '../src/Button';
import { action } from '@storybook/addon-actions';

const meta: Meta = {
  title: 'Buttons',
  component: Button,
  argTypes: {
    onClick: { action: 'clicked' },
    children: {
      defaultValue: 'default',
      control: {
        type: 'text',
      },
    },
    variant: {
      // name: 'variant',
      // description: 'background-color of button',
      defaultValue: 'default',
      options: ['primary', 'secondary', 'default'],
      // control: { type: 'radio' },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story = (args) => <Button {...args} />;

export const Default: Story = Template.bind({});
// export const Primary: Story<ButtonProps> = Template.bind({});
// export const Secondary: Story<ButtonProps> = Template.bind({});

// Primary.args = {
//   children: 'primary',
//   variant: 'primary',
// };

// Secondary.args = {
//   children: 'secondary',
//   variant: 'secondary',
//   // onClick: action('clicked2'),
// };
