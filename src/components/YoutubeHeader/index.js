import React from 'react';
import { FiSearch } from 'react-icons/fi';

import { Container, Burger, Grip, Video, Bell } from './styles';

import logo from '../../assets/youtube-logo.png';
import userImg from '../../assets/user.jpg';

function YoutubeHeader() {
  return(
    <Container>
      <div>
        <Burger />
        <a href="#"><img src={logo} alt="Youtube"/></a>
      </div>
      <div>
        <input type="text" placeholder="Pesquisar" />
        <button type="button"><FiSearch size={15} /></button>
      </div>
      <div>
        <Video />
        <Grip />
        <Bell />
        <img src={userImg} alt="User avatar"/>
      </div>
    </Container>
  );
}

export default YoutubeHeader;