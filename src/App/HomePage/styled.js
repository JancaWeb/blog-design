import styled from 'styled-components';

import mainImage from '../../images/mainImage.jpg';

export const MainWrapper = styled.div`
  background-image: url(${mainImage});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 100vh;
  padding-top: 20rem;
  margin-left: 2rem;
  display: flex;
  align-items: flex-start;
  text-align: center;
`;

export const MainTitle = styled.h1`
  font-weight: normal;
  font-size: 3rem;
  border-bottom: 2px solid;
  width: fit-content;
  color: #fff;
`;

export const MainTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin-right: 5rem;
`;

export const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const SocialIconsWrapper = styled.div`
  background-color: #fff;
  border: 1px solid;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 30rem;
  padding: 0.5rem;
  opacity: 0.5;
  &:hover {
    opacity: 1;
  }
`;

export const SocialIcon = styled.img`
  width: 50px;
  height: 50px;
  &:hover {
    cursor: pointer;
  }
`;