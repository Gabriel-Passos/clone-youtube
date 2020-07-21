import styled from 'styled-components';

export const Container = styled.div`
  grid-area: YV;
  background-color: #f9f9f9;

  height: 100vh;

  margin: 0 auto;

  display: flex;
  flex-direction: column;

  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;
