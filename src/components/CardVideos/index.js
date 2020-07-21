import React from 'react';
import { FaEllipsisV, FaClock, FaPlus } from 'react-icons/fa';
import ReactPlayer from 'react-player';

import { Container, VideoInfo, Icons } from './styles';

function CardVideos({title, channelName, qtdViews, dateVideo, url, channelIcon, videoTime}) {
  return(
    <Container>
      <header>
        <ReactPlayer url={url} controls light width={300} height={160}/>
        {/* <p>{videoTime}</p> */}
      </header>
      <section>
        <img src={channelIcon} alt={channelName}/>

        <VideoInfo>
          <strong>{title}</strong>
          <div>
            <span>{channelName}</span>
            <li>
              <p>{qtdViews} mil visualizações</p>
              <hr/>
              <p>há {dateVideo} anos</p>
            </li>
          </div>
        </VideoInfo>

        <aside>
          <FaEllipsisV  size={20} />
        </aside>
      </section>

      <Icons>
        <FaClock size={30} />
        <FaPlus size={30} />
      </Icons>
    </Container>
  );
}

export default CardVideos;