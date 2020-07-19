import styled from 'styled-components';

export const Button = styled.button`
  width: 240px;
  padding: 10px 28px;

  background-color: #fff;
  color: #333;

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

  &:focus{
    background-color: #ccc;
    color: #222;

    svg {
      color: red;
    }
  }

  & + button {
    margin-bottom: 12px;
  }
`;
