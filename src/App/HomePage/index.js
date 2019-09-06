import React from 'react';

import facebook from '../../images/facebook.png';
import twitter from '../../images/twitter.png';
import vk from '../../images/vk.png';
import instagram from '../../images/instagram.png';
import { GrowWrapper } from '../styled';

import { 
  MainWrapper, 
  MainTitle, 
  SocialIconsWrapper,
  SocialIcon,
  MainTitleWrapper,
  ContentWrapper
} from './styled';

export const HomePage = () => (
  <MainWrapper id="homePage">
    <ContentWrapper>
    <SocialIconsWrapper>
      <GrowWrapper>
        <SocialIcon src={facebook} alt="facebookIcon" />
      </GrowWrapper>
      <GrowWrapper>
        <SocialIcon src={twitter} alt="twitterIcon" />
      </GrowWrapper>
      <GrowWrapper>
        <SocialIcon src={vk} alt="vkIcon" />
      </GrowWrapper>
      <GrowWrapper>
        <SocialIcon src={instagram} alt="instagramIcon" />
      </GrowWrapper>
    </SocialIconsWrapper>
    <MainTitleWrapper>
      <MainTitle>
        ЛАЙФ ХАК О ЖИЗНИ
      </MainTitle>
    </MainTitleWrapper>
    </ContentWrapper>
  </MainWrapper>
);
