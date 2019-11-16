import React from 'react';
import { string } from 'prop-types';
import { useMediaQuery } from 'react-responsive';
import { mediaQuery } from '../../tokens';
import Button from '../Button';
import * as S from './styles';

const Location = ({ location }) => {
    const isTabletOrLarger = useMediaQuery({ query: mediaQuery.tablet });

    return (
        <S.Wrapper isMobile={!isTabletOrLarger}>
            <S.WidthWrapper isMobile={!isTabletOrLarger}>
                <div>
                    <S.Title>Location</S.Title>
                    <S.WhiteTitle isMobile={!isTabletOrLarger}>{location}</S.WhiteTitle>
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
