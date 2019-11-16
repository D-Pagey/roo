import styled from 'styled-components';

export const Wrapper = styled.div`
    align-items: center;
    box-sizing: border-box;
    display: flex;
    height: ${({ isTabletOrLarger }) => (isTabletOrLarger ? '60px' : '48px')};
    justify-content: space-between;
    max-width: 1126px;
    padding: 0 1rem;
    width: 100%;
`;

export const UserWrapper = styled.div`
    align-items: center;
    display: flex;
`;

export const UserName = styled.span`
    margin: 0 0 0 6px;
`;
