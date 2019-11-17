import styled from 'styled-components';
import { colours, mediaQuery, PAGE_WIDTH } from '../../tokens';

export const Wrapper = styled.div`
    background-color: ${colours.lightTeal};
    box-sizing: border-box;
    display: flex;
    height: 177px;
    justify-content: center;
    padding: 1.5rem 1rem;
    width: 100%;

    @media ${mediaQuery.tablet} {
        height: 156px;
    }
`;

export const WidthWrapper = styled.div`
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    max-width: ${PAGE_WIDTH};
    width: 100%;

    @media ${mediaQuery.tablet} {
        align-items: center;
        flex-direction: row;
    }
`;

export const Title = styled.h4`
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.375rem;
    margin: 0 0 2px;
    opacity: 50%;
`;

export const WhiteTitle = styled.h5`
    color: ${colours.white};
    font-size: 2.125rem;
    font-weight: 500;
    margin: 0 0 1.25rem;

    @media ${mediaQuery.tablet} {
        margin: 0;
    }
`;
