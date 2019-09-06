import React from 'react';
import Link from 'react-scroll/modules/components/Link';

import { 
  HeaderWrapper,
  HeaderTitle,
  HeaderNavigationWrapper,
  NavItem
} from './styled'

export const Header = () => (
  <HeaderWrapper>
    <Link to="homePage" smooth={true} duration={500} offset={-80}>
      <HeaderTitle>
        Светланка
      </HeaderTitle>
    </Link>
    <HeaderNavigationWrapper>
      <Link to="blog" smooth={true} duration={500} offset={-80}>
        <NavItem>Мой Блог</NavItem>
      </Link>
      <Link to="instagram" smooth={true} duration={500} offset={-80}>
        <NavItem>История моей жизни</NavItem>
      </Link>
      <Link to="contacts" smooth={true} duration={500} offset={-80}>
        <NavItem>Подписаться</NavItem>
      </Link>
    </HeaderNavigationWrapper>
  </HeaderWrapper>
);