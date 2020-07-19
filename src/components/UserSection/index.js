import React from 'react';
import { 
  FaHome, 
  FaFireAlt, 
  FaClock, 
  FaHistory, 
  FaCog, 
  FaQuestionCircle,
  FaRegCaretSquareRight,
  FaFilm,
  FaGamepad,
  FaYoutube,
  FaLightbulb,
  FaBroadcastTower,
  FaExclamationTriangle,
  FaRegClone,
  FaUsers } from 'react-icons/fa';

import userImg from '../../assets/cblol-logo.jpg';

import ButtonUserSection from '../ButtonUserSection';

import { Container } from './styles';

const copy = '\u00A9';

function UserSection() {
  return(
    <Container>
      <div>
        <ButtonUserSection><FaHome /> Início</ButtonUserSection>
        <ButtonUserSection><FaFireAlt /> Em alta</ButtonUserSection>
        <ButtonUserSection><FaUsers /> Inscrições</ButtonUserSection>
      </div>
      <div>
        <ButtonUserSection><FaRegClone /> Biblioteca</ButtonUserSection>
        <ButtonUserSection><FaHistory /> Histórico</ButtonUserSection>
        <ButtonUserSection><FaRegCaretSquareRight /> Seus vídeos</ButtonUserSection>
        <ButtonUserSection><FaClock /> Assitir mais tarde</ButtonUserSection>
        {/* <ButtonUserSection><FaFireAlt /> Vídeos marcados com gostei</ButtonUserSection> */}
      </div>
      <div>
        <span>INSCRIÇÕES</span>
        <ButtonUserSection><img src={userImg} alt="Avatar"/> LoL eSports BR</ButtonUserSection>
        <ButtonUserSection><img src={userImg} alt="Avatar"/> LoL eSports BR</ButtonUserSection>
        <ButtonUserSection><img src={userImg} alt="Avatar"/> LoL eSports BR</ButtonUserSection>
        <ButtonUserSection><img src={userImg} alt="Avatar"/> LoL eSports BR</ButtonUserSection>
      </div>
      <div>
        <span>MAIS DO YOUTUBE</span>
        <ButtonUserSection><FaYoutube /> YouTube Premium</ButtonUserSection>
        <ButtonUserSection><FaFilm /> Filmes</ButtonUserSection>
        <ButtonUserSection><FaGamepad /> jogos</ButtonUserSection>
        <ButtonUserSection><FaBroadcastTower /> Ao vivo</ButtonUserSection>
        <ButtonUserSection><FaLightbulb /> Aprender</ButtonUserSection>
      </div>
      <div>
        <ButtonUserSection><FaCog /> Configurações</ButtonUserSection>
        {/* <ButtonUserSection><FaFlag /> Histórico de denúncias</ButtonUserSection> */}
        <ButtonUserSection><FaQuestionCircle /> Ajuda</ButtonUserSection>
        <ButtonUserSection><FaExclamationTriangle /> Enviar feedback</ButtonUserSection>
      </div>
      <div>
        <ul>
          <li><a href="teste">Sobre</a> <a href="teste">Impresa</a></li>
          <li><a href="teste">Direitos autorais</a></li>
          <li><a href="teste">Entre em contato</a></li>
          <li><a href="teste">Criadores de conteúdo</a></li>
          <li><a href="teste">Publicidade</a> <a href="teste">Desenvolvedores</a></li>
        </ul>
        <ul>
          <li><a href="teste">Termos</a> <a href="teste">Privacidade</a></li>
          <li><a href="teste">Política e Segurança</a></li>
          <li><a href="teste">Testar os novos recursos</a></li>
        </ul>
        <ul>
          <li><p>{copy} 2020 Google LLC</p></li>
        </ul>
      </div>
    </Container>
  );
}

export default UserSection;