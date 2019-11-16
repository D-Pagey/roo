import styled from 'styled-components';

export const Wrapper = styled.div`
    background-color: #00ccbc;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    height: ${({ isMobile }) => (isMobile ? '177px' : '156px')};
    padding: 1.5rem 1rem;
    width: 100%;
`;

export const WidthWrapper = styled.div`
    align-items: ${({ isMobile }) => (isMobile ? 'flex-start' : 'center')};
    display: flex;
    flex-direction: ${({ isMobile }) => (isMobile ? 'column' : 'row')};
    justify-content: space-between;
    max-width: 1126px;
    width: 100%;
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
