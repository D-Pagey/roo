import React from 'react';
import { arrayOf, number, string } from 'prop-types';
import * as S from './styles';

const RestaurantCard = ({ imageURL, name, price, tags }) => (
    <S.Wrapper>
        <img src={imageURL} alt={name} />
        <h3>{name}</h3>
        <S.List>
            {tags.map((tag) => (
                <li key={tag}>{tag}</li>
            ))}
            {'£'.repeat(price)}
        </S.List>
    </S.Wrapper>
);

RestaurantCard.propTypes = {
    imageURL: string.isRequired,
    name: string.isRequired,
    price: number.isRequired,
    tags: arrayOf(string).isRequired
};

export default RestaurantCard;
