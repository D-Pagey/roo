import React from 'react';
import { storiesOf } from '@storybook/react';
import data from '../../restaurants';
import RestaurantList from '.';

const props = {
    restaurants: data.restaurants
};

storiesOf('RestaurantList', module).add('default', () => <RestaurantList {...props} />);
