import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  > div {
    display: flex;
    align-items: stretch;
    flex-wrap: wrap;

    margin: 16px 0 24px;
  }
`;

export const Title = styled.h1`
  font-size: 20px;
  font-weight: 500;
  margin: 36px 0 0 24px;
`;
