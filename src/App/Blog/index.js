import React from 'react';

import blogImage1 from '../../images/blogImage1.jpeg';
import blogImage2 from '../../images/blogImage2.jpeg';
import blogImage3 from '../../images/blogImage3.jpeg';

import movie1 from '../../images/movie1.mp4';
import movie2 from '../../images/movie2.mp4';
import movie3 from '../../images/movie3.mp4';

import {
  MainBlogWrapper,
  MainBlogImageWrapper,
  MainVideo,
  BlogImagesWrapper,
  BlogImageWrapper,
  BlogImage
} from './styled';

export const Blog = () => {
  const [ chosenVideo, setVideo ] = React.useState({movie: movie1, photo: blogImage1, active: 1});

  return (
    <MainBlogWrapper id="blog">
      <MainBlogImageWrapper>
        <MainVideo controls={true} key={chosenVideo.movie} poster={chosenVideo.photo}>
          <source src={chosenVideo.movie} type="video/mp4" />
          Ваш браузер не работает с видео тагом
        </MainVideo>
      </MainBlogImageWrapper>
      <BlogImagesWrapper>
        <BlogImageWrapper onClick={() => setVideo({movie:movie2, photo: blogImage2, active: 2})} isActive={chosenVideo.active === 2}>
          <BlogImage src={blogImage2} alt="blogImage2" />
        </BlogImageWrapper>
        <BlogImageWrapper onClick={() => setVideo({movie: movie3, photo: blogImage3, active: 3})} isActive={chosenVideo.active === 3}>
          <BlogImage src={blogImage3} alt="blogImage3" />
        </BlogImageWrapper>
        <BlogImageWrapper onClick={() => setVideo({movie: movie1, photo: blogImage1, active: 1})} isActive={chosenVideo.active === 1}>
          <BlogImage src={blogImage1} alt="blogImage1" />
        </BlogImageWrapper>
      </BlogImagesWrapper>
    </MainBlogWrapper>
  )
}