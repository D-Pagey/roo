import React from 'react';
import { render } from '@testing-library/react';
import data from '../../restaurants';
import RestaurantList from '.';

const props = {
    restaurants: data.restaurants
};

describe('RestaurantList component', () => {
    it('should render', () => {
        const { container } = render(<RestaurantList {...props} />);
        expect(container.firstChild).toMatchSnapshot();
    });
});
