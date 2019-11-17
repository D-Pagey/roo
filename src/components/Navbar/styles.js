import styled from 'styled-components';
import { mediaQuery, PAGE_WIDTH } from '../../tokens';

export const Wrapper = styled.div`
    align-items: center;
    box-sizing: border-box;
    display: flex;
    height: 48px;
    justify-content: space-between;
    max-width: ${PAGE_WIDTH};
    padding: 0 1rem;
    width: 100%;

    @media ${mediaQuery.tablet} {
        height: 60px;
    }

    @media (min-width: ${PAGE_WIDTH}) {
        padding: 0;
    }
`;

export const UserWrapper = styled.div`
    align-items: center;
    display: flex;
`;

export const UserName = styled.span`
    margin: 0 0 0 6px;
`;
