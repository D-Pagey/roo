import React from 'react';
import { arrayOf, number, string } from 'prop-types';
import * as S from './styles';

const RestaurantCard = ({ imageURL, link, name, price, tags }) => (
    <S.Link href={link} target="_blank" rel="noopener noreferrer">
        <S.Image src={imageURL} alt={name} />

        <S.Title>{name}</S.Title>
        <S.List>
            {tags.map((tag) => (
                <React.Fragment key={tag}>
                    <li>{tag}</li>
                    <S.Bullet>·</S.Bullet>
                </React.Fragment>
            ))}
            {'£'.repeat(price)}
        </S.List>
    </S.Link>
);

RestaurantCard.propTypes = {
    imageURL: string.isRequired,
    link: string.isRequired,
    name: string.isRequired,
    price: number.isRequired,
    tags: arrayOf(string).isRequired
};

export default RestaurantCard;
