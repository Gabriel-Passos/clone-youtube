import styled from 'styled-components';

export const Container = styled.div`
  grid-area: YV;
  background-color: #f9f9f9;

  height: 100vh;

  padding: 50px 20px;

  display: flex;
  flex-direction: column;

  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;
