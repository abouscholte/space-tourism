import React from 'react';
import {
  OuterNav,
  NavContainer,
} from '../../styles/base-navigation';

import Logo from '../../assets/shared/logo.svg';

export default function Navigation() {
  return (
    <OuterNav>
      <NavContainer>
        <img src={Logo} alt="logo.svg" />
      </NavContainer>
    </OuterNav>
  );
}
