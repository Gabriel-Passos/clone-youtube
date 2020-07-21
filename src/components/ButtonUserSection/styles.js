import styled from 'styled-components';

export const Button = styled.button`
  width: 240px;
  padding: 10px 28px;

  background-color: #fff;
  color: #444;

  border: 0;

  font-size: 15px;

  display: flex;
  align-items: center;

  > svg{
    width: 21px;
    height: 21px;

    margin-right: 28px;

    color: #444;
  }

  > img {
    max-width: 24px;
    height: 24px;

    margin-right: 28px;

    border-radius: 50%;
  }

  &:focus{
    background-color: #ccc;
    color: #000;

    svg {
      color: red;
    }
  }
`;
