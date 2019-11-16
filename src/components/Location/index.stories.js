import React from 'react';
import { storiesOf } from '@storybook/react';
import Location from '.';

const props = {
    location: 'Fitzrovia'
};

storiesOf('Location', module).add('default', () => <Location {...props} />);
