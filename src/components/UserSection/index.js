import React from 'react';
import { FaHome, FaFireAlt, FaClock, FaFlag, FaCog, FaQuestionCircle } from 'react-icons/fa';

import ButtonUserSection from '../ButtonUserSection';

import { Container } from './styles';

function UserSection() {
  return(
    <Container>
      <div>
        <ButtonUserSection><FaHome /> Início</ButtonUserSection>
        <ButtonUserSection><FaFireAlt /> Em alta</ButtonUserSection>
        <ButtonUserSection><FaFireAlt /> Inscrições</ButtonUserSection>
      </div>
      <div>
        <ButtonUserSection><FaHome /> Biblioteca</ButtonUserSection>
        <ButtonUserSection><FaFireAlt /> Histórico</ButtonUserSection>
        <ButtonUserSection><FaFireAlt /> Seus vídeos</ButtonUserSection>
        <ButtonUserSection><FaClock /> Assitir mais tarde</ButtonUserSection>
        {/* <ButtonUserSection><FaFireAlt /> Vídeos marcados com gostei</ButtonUserSection> */}
      </div>
      <div>
        <span>INSCRIÇÕES</span>
      </div>
      <div>
        <span>MAIS DO YOUTUBE</span>
        <ButtonUserSection><FaHome /> YouTube Premium</ButtonUserSection>
        <ButtonUserSection><FaFireAlt /> Filmes</ButtonUserSection>
        <ButtonUserSection><FaFireAlt /> jogos</ButtonUserSection>
        <ButtonUserSection><FaFireAlt /> Ao vivo</ButtonUserSection>
        <ButtonUserSection><FaFireAlt /> Aprender</ButtonUserSection>
      </div>
      <div>
        <ButtonUserSection><FaCog /> Configurações</ButtonUserSection>
        {/* <ButtonUserSection><FaFlag /> Histórico de denúncias</ButtonUserSection> */}
        <ButtonUserSection><FaQuestionCircle /> Ajuda</ButtonUserSection>
        <ButtonUserSection><FaFireAlt /> Enviar feedback</ButtonUserSection>
      </div>
      <div>
        
      </div>
    </Container>
  );
}

export default UserSection;