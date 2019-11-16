import styled from 'styled-components';
import { colours } from '../../tokens';

export const Button = styled.button`
    background-color: ${colours.white};
    border-radius: 3px;
    border: 0;
    color: ${colours.darkTeal};
    cursor: pointer;
    font-size: 1rem;
    padding: 11px 1rem;
`;
