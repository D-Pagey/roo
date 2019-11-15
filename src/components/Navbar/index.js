import React from 'react';
// import Logo from './assets/logo-horizontal.svg';
import SmallLogo from './assets/small-logo.svg';
import UserIcon from './assets/user-icon.svg';
import * as S from './styles';

// export image from sketch

const Navbar = () => (
    <S.Wrapper>
        <img src={SmallLogo} alt="deliveroo logo" />
        <img src={UserIcon} alt="user icon" />
    </S.Wrapper>
);

export default Navbar;
