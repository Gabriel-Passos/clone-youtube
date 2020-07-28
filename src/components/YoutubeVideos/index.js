import React from 'react';

import RecommendedVideos from '../RecommendedVideos';
// import RecentPosts from '../RecentPosts';

import { Container } from './styles';

function YoutubeVideos() {
  return(
    <Container>
      <RecommendedVideos />
      {/* <RecentPosts /> */}
    </Container>
  );
}

export default YoutubeVideos;