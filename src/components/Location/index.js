import React from 'react';
import { string } from 'prop-types';
import Button from '../Button';
import * as S from './styles';

const Location = ({ location }) => (
    <S.Wrapper>
        <S.WidthWrapper>
            <div>
                <S.Title>Location</S.Title>
                <S.WhiteTitle>{location}</S.WhiteTitle>
            </div>

            <Button>Change Location</Button>
        </S.WidthWrapper>
    </S.Wrapper>
);

Location.propTypes = {
    location: string.isRequired
};

export default Location;
