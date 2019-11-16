import styled from 'styled-components';

export const Wrapper = styled.div`
    align-items: ${({ isMobile }) => (isMobile ? 'flex-start' : 'center')};
    background-color: #00ccbc;
    box-sizing: border-box;
    display: flex;
    flex-direction: ${({ isMobile }) => (isMobile ? 'column' : 'row')};
    height: ${({ isMobile }) => (isMobile ? '177px' : '156px')};
    justify-content: space-between;
    padding: 1.5rem 1rem;
`;

export const Title = styled.h4`
    font-size: 1rem;
    line-height: 1.375rem;
    margin: 0 0 2px;
    opacity: 50%;
`;

export const WhiteTitle = styled.h5`
    color: #ffffff;
    font-size: 2.125rem;
    margin: ${({ isMobile }) => (isMobile ? '0 0 1.25rem' : 0)};
`;
