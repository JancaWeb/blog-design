import React from 'react';

import upperImage from '../../images/upperImage.jpeg';
import bottomImage from '../../images/bottomImage.jpeg';
import blogImage1 from '../../images/blogImage1.jpeg';
import blogImage2 from '../../images/blogImage2.jpeg';
import blogImage3 from '../../images/blogImage3.jpeg';
import instagramImage1 from '../../images/instagramImage1.jpeg';
import instagramImage2 from '../../images/instagramImage2.jpeg';

import {
  InstagramWrapper,
  InstagramTitle,
  MainLayoutWrapper,
  LeftSideWrapper,
  RightSideWrapper,
  UpImage,
  BottomImage,
  UpImageWrapper,
  BottomImageWrapper,
  ImageWrapper,
  StyledImage
} from './styled';

const leftSideImages = [
  instagramImage1,
  blogImage1,
  blogImage3,
  blogImage2,
  instagramImage2
]

export const Instagram = () => (
  <InstagramWrapper id="instagram">
    <InstagramTitle>
      #Инстаграм
    </InstagramTitle>
    <MainLayoutWrapper>
      <LeftSideWrapper>
        <UpImageWrapper>
          <UpImage src={upperImage} alt="upperImage" />
        </UpImageWrapper>
        <BottomImageWrapper>
          <BottomImage src={bottomImage} alt="bottomImage" />
        </BottomImageWrapper>
      </LeftSideWrapper>
      <RightSideWrapper>
        {leftSideImages.map((image, i) => (
          <ImageWrapper key={i}>
            <StyledImage src={image} alt={`image-${i}`} />
          </ImageWrapper>
        ))}
      </RightSideWrapper>
    </MainLayoutWrapper>
  </InstagramWrapper>
);
