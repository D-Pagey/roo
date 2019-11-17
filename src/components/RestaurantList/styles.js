import styled from 'styled-components';
import { PAGE_WIDTH, mediaQuery } from '../../tokens';

export const Grid = styled.div`
    display: grid;
    grid-column-gap: 2rem;
    grid-row-gap: 24px;
    grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
    max-width: ${PAGE_WIDTH};
    padding: 1rem;
    width: 100%;

    @media ${mediaQuery.tablet} {
        padding: 0 1rem;
    }

    @media (min-width: ${PAGE_WIDTH}) {
        padding: 0;
    }
`;
