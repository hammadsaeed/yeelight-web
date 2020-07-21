
import React from 'react';
import { LightControl } from '../components/lightControl';

export default {
  title: 'LightControl',
  component: LightControl,
};

export const lightPick = () => <LightControl />;

lightPick.story = {
  name: 'LightControl',
};
