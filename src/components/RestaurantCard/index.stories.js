import React from 'react';
import { storiesOf } from '@storybook/react';
import RestaurantCard from '.';

const restaurant = {
    id: '63460',
    name: 'Burrito Kitchen',
    image:
        'https://f.roocdn.com/images/menus/25785/header-image.jpg?width=360&height=200&auto=webp&format=jpg&fit=crop&v=1477308353',
    url: 'https://deliveroo.co.uk/menu/london/bank/burrito-kitchen-cheapside',
    price: 2,
    tags: ['Mexican', 'Burritos', 'Halal']
};

storiesOf('RestaurantCard', module).add('default', () => (
    <RestaurantCard
        imageURL={restaurant.image}
        link={restaurant.url}
        name={restaurant.name}
        price={restaurant.price}
        tags={restaurant.tags}
    />
));
