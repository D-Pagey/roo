import styled from 'styled-components';

export const Link = styled.a`
    display: flex;
    flex-direction: column;
    max-width: 354px;
    text-decoration: none;
    width: 100%;
`;

export const Image = styled.img`
    margin: 0 0 0.5rem;
`;

export const Title = styled.h5`
    color: #2e3333;
    font-size: 1.375rem;
    font-weight: 500;
    margin: 0 0 5px;
`;

export const List = styled.ul`
    color: #828585;
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
`;

export const Bullet = styled.span`
    margin: 0 0.5rem;
`;
