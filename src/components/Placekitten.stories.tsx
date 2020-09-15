import React from 'react';
import { Story } from '@storybook/react';
import Placekitten from './Placekitten';

export default {
  title: 'Placekitten',
  component: Placekitten,
};

const Template : Story<React.ComponentProps<typeof Placekitten>> = args => <Placekitten {...args} />;

export const RandomKitten = Template.bind({});
RandomKitten.args = {};

export const ChosenKitten = Template.bind({});
ChosenKitten.args = {kittenNum: 2};
