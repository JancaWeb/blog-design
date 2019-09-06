import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  width: 100%;
  background-color: #fff;
  color: #000;
  display: flex;
  justify-content: space-between;
  position: fixed;
  z-index: 100;
  height: 5rem;
`;

export const HeaderTitle = styled.h3`
  font-size: 2.5rem;
  letter-spacing: 10px;
  margin: 0 1rem;
  font-weight: normal;
`;

export const NavItem = styled.p`
  font-size: 1.5rem;
  margin: 0 1rem;
`;

export const HeaderNavigationWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;