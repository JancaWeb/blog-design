import styled from 'styled-components';

export const MainBlogWrapper = styled.div`
  background-color: #ffdb26;
  margin-left: 1rem;
  margin-top: 1rem;
  padding-bottom: 2rem;
`;

export const MainBlogImageWrapper = styled.div`
  margin: 1rem auto;
  width: 50%;
`;

export const MainVideo = styled.video`
  width: 100%;
  margin-top: 2rem;
`;

export const BlogImagesWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 2px;
`;

export const BlogImageWrapper = styled.div`
  flex-basis: 30%;
  height: 25rem;

  border: ${props => props.isActive ? '5px solid #34d8eb' : 'none'};
  margin: -5px;
  &:hover {
    border: 5px solid #34d8eb;
    margin: -5px;
    cursor: pointer;
  }
`;

export const BlogImage = styled.img`
  width: 100%;
  height: 100%;
`;