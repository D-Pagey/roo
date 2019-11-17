import React from 'react';
import { string } from 'prop-types';
import * as S from './styles';

const Button = ({ children }) => <S.Button>{children}</S.Button>;

Button.propTypes = {
    children: string.isRequired
};

export default Button;
