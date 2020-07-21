import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  > div {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }
`;

export const Title = styled.h1`
  font-size: 20px;
  font-weight: 500;
  margin-left: 13px;
`;
