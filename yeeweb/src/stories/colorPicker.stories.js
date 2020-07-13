import React from 'react';
import { ColorPicker } from '../components/colorPicker';

export default {
  title: 'ColorPicker',
  component: ColorPicker,
};

export const colorPick = () => <ColorPicker />;

colorPick.story = {
  name: 'ColorPicker',
};
