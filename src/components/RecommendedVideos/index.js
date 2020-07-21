import React from 'react';

import CardVideos from '../CardVideos';

import { Container, Title } from './styles';

import videos from '../../mock/videos';

function RecommendedVideos() {
  return(
    <Container>
      <Title>Recomendados</Title>
      <div >
        {videos.map(video => (
          <CardVideos
            key={video.id}
            title={video.title} 
            channelName={video.channel} 
            qtdViews={video.views} 
            dateVideo={video.datePosting} 
            url={video.url}
            channelIcon={video.channelAvatar}
            videoTime={video.videoTime}
          />
        ))}
      </div>
        
    </Container>
  );
}

export default RecommendedVideos;