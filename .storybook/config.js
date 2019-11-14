import { configure } from '@storybook/react';
import requireContext from 'require-context.macro';

configure(() => {
    const req = requireContext('../src', true, /\.stories\.js$/);
    req.keys().forEach((filename) => req(filename));
  }, module);
