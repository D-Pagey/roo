import React from 'react';
import { string } from 'prop-types';
import { useMediaQuery } from 'react-responsive';
import { mediaQuery } from '../../tokens';
import Button from '../Button';
import * as S from './styles';

const Location = ({ location }) => {
    const isLaptopOrLarger = useMediaQuery({ query: mediaQuery.laptop });

    return (
        <S.Wrapper isMobile={!isLaptopOrLarger}>
            <S.WidthWrapper isMobile={!isLaptopOrLarger}>
                <div>
                    <S.Title>Location</S.Title>
                    <S.WhiteTitle isMobile={!isLaptopOrLarger}>{location}</S.WhiteTitle>
                </div>

                <Button>Change Location</Button>
            </S.WidthWrapper>
        </S.Wrapper>
    );
};

Location.propTypes = {
    location: string.isRequired
};

export default Location;
