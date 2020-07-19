import styled from 'styled-components';

// YH - Youtube Header
// US - User Section
// YV - Youtube Vídeos

export const Grid = styled.div`
  display: grid;

  grid-template-columns: 240px auto;
  grid-template-rows: 52px auto;

  grid-template-areas: 
    'YH YH'
    'US YV'
  ;

  height: 100vh;
`;
