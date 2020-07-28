import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  position: relative;
  
  height: 320px;

  margin: 0 8px 24px;

  header {
    > p {
      position: absolute;
      right: 0; 

      background-color: rgba(0,0,0,0.8);
      color: rgba(255,255,255,0.9);
      padding: 2px;
      margin: 4px;
      border-radius: 2px;

      font-size: 13px;
      font-weight: 700;
    }
  }

  section {
    display: flex;

    margin-top: 16px;
    width: 355px;
    height: 140px;

    img {
      top: 0;
      left: 0;

      width: 40px;
      height: 40px;

      border-radius: 50%;
      margin-right: 8px;
    }

    aside {
      width: 15px;

      svg {
        position: absolute;

        margin-right: 8px;

        display: none;

        right: 0;
        
        color: #999;

        &:hover {
          color: #666;
        }
      }
    }
  }

  &:hover{
    svg {
      display: block;
    }
  }

  cursor: pointer;
`;

export const VideoInfo = styled.div`
  width: 300px;

  display: flex;
  flex-direction: column;

  font-size: 14px;

  strong {
    width: 235px;
  }

  >div{
    margin-top: 10px;

    span {
      color: #606060;

      &:hover {
        color: #000;
      }
    }
    
    li {
      display: flex;
      align-items: center;      
      
      p {
        color: #606060;
      }

      hr {
        border: 1.5px solid #606060;
        border-radius: 50%;
        margin: 0 8px;
      }
    }
  }
`;

export const Icons = styled.div`
  position: absolute;

  display: flex;
  flex-direction: column;

  top: 0;
  right: 0;

  > svg {
    display: none;

    margin: 4px;
    padding: 4px;

    background-color: rgba(0,0,0,0.8);
    color: rgba(255,255,255,0.9);

    border-radius: 3px;

    &:hover {
      background-color: #000;
    }
  }

  &:hover{
    svg {
      display: block;
    }
  }
`;