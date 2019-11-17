import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { mediaQuery } from '../../tokens';
import Logo from './assets/logo-horizontal.svg';
import SmallLogo from './assets/small-logo.svg';
import UserIcon from './assets/user-icon.svg';
import * as S from './styles';

const Navbar = () => {
    const isTabletOrLarger = useMediaQuery({ query: mediaQuery.tablet });

    return (
        <S.NavWrapper>
            {isTabletOrLarger ? (
                <img src={Logo} alt="deliveroo logo" data-testid="navbarLogo" />
            ) : (
                <img src={SmallLogo} alt="deliveroo logo" data-testid="navbarSmallLogo" />
            )}

            <S.UserWrapper>
                <img src={UserIcon} alt="user icon" />
                {isTabletOrLarger && <S.UserName>Jane Smith</S.UserName>}
            </S.UserWrapper>
        </S.NavWrapper>
    );
};

export default Navbar;
