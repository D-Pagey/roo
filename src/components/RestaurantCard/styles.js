import styled from 'styled-components';
import { colours } from '../../tokens';

export const Link = styled.a`
    display: flex;
    flex-direction: column;
    max-width: 354px;
    text-decoration: none;
    width: 100%;
`;

export const Image = styled.img`
    height: auto;
    margin: 0 0 0.5rem;
    max-width: 100%;
`;

export const Title = styled.h5`
    color: ${colours.darkGrey};
    font-size: 1.375rem;
    font-weight: 500;
    margin: 0 0 5px;
`;

export const List = styled.ul`
    color: ${colours.lightGrey};
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
`;

export const Bullet = styled.span`
    margin: 0 0.5rem;
`;
