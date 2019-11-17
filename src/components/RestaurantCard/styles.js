import styled from 'styled-components';
import { colours } from '../../tokens';

export const Link = styled.a`
    display: flex;
    flex-direction: column;
    text-decoration: none;
`;

export const RatioWrapper = styled.div`
    height: 0;
    margin: 0 0 0.5rem;
    overflow: hidden;
    padding-top: calc(0.5625 * 100%);
    position: relative;
`;

export const Image = styled.img`
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
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
    flex-wrap: wrap;
    font-size: 14px;
    list-style: none;
    margin: 0;
    padding: 0;
`;

export const Bullet = styled.span`
    margin: 0 0.5rem;
`;
