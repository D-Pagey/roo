import React from 'react';
import { render } from '@testing-library/react';
import RestaurantCard from '.';

const props = {
    name: 'Burrito Kitchen',
    imageURL:
        'https://f.roocdn.com/images/menus/25785/header-image.jpg?width=360&height=200&auto=webp&format=jpg&fit=crop&v=1477308353',
    price: 2,
    tags: ['Mexican', 'Burritos', 'Halal']
};

describe('RestaurantCard component', () => {
    it('should render', () => {
        const { container } = render(<RestaurantCard {...props} />);
        expect(container.firstChild).toMatchSnapshot();
    });
});
