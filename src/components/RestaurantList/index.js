import React from 'react';
import { arrayOf, number, shape, string } from 'prop-types';
import RestaurantCard from '../RestaurantCard';
import * as S from './styles';

const RestaurantList = ({ restaurants }) => (
    <S.Grid>
        {restaurants.map((restaurant) => (
            <RestaurantCard
                key={restaurant.id}
                imageURL={restaurant.image}
                link={restaurant.url}
                name={restaurant.name}
                price={restaurant.price}
                tags={restaurant.tags}
            />
        ))}
    </S.Grid>
);

RestaurantList.propTypes = {
    restaurants: arrayOf(
        shape({
            id: string.isRequired,
            name: string.isRequired,
            image: string.isRequired,
            url: string.isRequired,
            price: number.isRequired,
            tags: arrayOf(string).isRequired
        }).isRequired
    ).isRequired
};

export default RestaurantList;
