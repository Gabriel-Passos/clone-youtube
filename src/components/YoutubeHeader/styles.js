import styled from 'styled-components';
import { FiMenu } from 'react-icons/fi';
import { FaTh, FaVideo, FaBell } from 'react-icons/fa';

export const Container = styled.header`
  grid-area: YH;

  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 56px;

  position: fixed;
  background-color: #fff;

  padding: 0 24px;

  z-index: 2;

  > div {
    display: flex;
    align-items: center;

    a {
      display: flex;
      align-items: center;
      
      > img {
        max-width: 80px;
        height: auto;
      }
    }

    > img {
      max-width: 40px;
      height: auto;
      border-radius: 50%;

      cursor: pointer;
    }

    input {
      width: 575px;
      height: 30px;
      border: 1px solid #c6c6c6;
      border-radius: 2px 0 0 2px;

      padding: 4px 6px;

      ::placeholder{
        color: #757575;
        font-weight: 500;
      }

      &:focus{
        border-color: #1c62b9;
      }
    }

    button {
      width: 70px;
      border: 1px solid #c6c6c6;
      border-left: 0;
      border-radius: 0 2px 2px 0;
      background-color: #f8f8f8;
      padding: 4.5555px 6px;

      > svg {
        color: #757575;
      }

      &:hover{
        background-color: #f0f0f0;
        
        svg{
          color: #333;
        }
      }
    }

    > svg {
      margin-right: 24px;
    }
  }
`;

export const Burger = styled(FiMenu)`
  width: 21px;
  height: 21px;

  color: #606060;

  cursor: pointer;
`;

export const Grip = styled(FaTh)`
  width: 21px;
  height: 21px;

  color: #606060;

  cursor: pointer;
`;

export const Video = styled(FaVideo)`
  width: 21px;
  height: 21px;

  color: #606060;

  cursor: pointer;
`;

export const Bell = styled(FaBell)`
  width: 21px;
  height: 21px;

  color: #606060;

  cursor: pointer;
`;