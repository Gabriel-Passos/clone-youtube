import styled from 'styled-components';

export const Button = styled.button`
  width: 240px;
  height: 40px;
  padding: 0 24px;

  background-color: #fff;
  color: #030303;

  border: 0;

  font-size: 14px;

  display: flex;
  align-items: center;

  > svg{
    width: 21px;
    height: 21px;

    margin: 0 24px 0 0;

    color: #444;
  }

  > img {
    max-width: 24px;
    height: 24px;

    margin: 0 24px 0 0;

    border-radius: 50%;
  }

  &:hover{
    background-color: #f1f1f1;
  }

  &:focus{
    background-color: #ccc;
    color: #000;

    svg {
      color: red;
    }
  }
`;
