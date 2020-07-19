import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body{
    background: #ffffff;
    font-family: Roboto, sans-serif;
  }

  body, button, input{
    font-size: 16px;
  }

  button{
    cursor: pointer;
  }

  a{ 
    text-decoration: none;
  }

  ul li {
    list-style: none;
  }
`;
