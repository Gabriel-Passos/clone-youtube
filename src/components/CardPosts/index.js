import React from 'react';

import { Container, Header, Body, Footer } from './styles';

function CardPosts() {
  return(
    <Container>
      <Header>
        <img src="" alt=""/>
        <div>
          <a href="teste">Nome do canal</a>
          <hr/>
          <a href="teste">tempo da postagem</a>
        </div>
      </Header>
      <Body>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
          Eos excepturi est eaque facilis deleniti? Aut sit magnam rerum 
          rem nisi perspiciatis, facere dolorum.
        </p>
        <img src="" alt=""/>
      </Body>
      <Footer>
        <div>
          <p>545</p>
        </div>
        <div>
          <p>44</p>
        </div>
      </Footer>
    </Container>
  );
}

export default CardPosts;