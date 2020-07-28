import styled from 'styled-components';

export const Container = styled.div`
  grid-area: US;
  
  height: 100vh;

  display: flex;
  flex-direction: column;

  overflow-y: scroll;

  ::-webkit-scrollbar{
    display: none;
  }

  div {
    padding: 12px 0;
    box-shadow: rgba(0,0,0,0.1) 1px 1px 0 0.1px;

    span{
      display: block;

      padding: 8px 24px;

      font-size: 14px;
      font-weight: 500;
      color: #606060;
    }
  }

  footer {
    ul{
      padding: 16px 24px 0;
      
      li{
        a{
          font-size: 13px;
          font-weight: 500;
          color: #606060;
          margin-right: 5px;
        }

        p{
          font-size: 13px;
          color: #909090;
        }
      }

      & + ul {
        padding: 16px 24px;
      } 
    }
  }

  &:hover {
    overflow-x: hidden;

    ::-webkit-scrollbar {
      display: block;
      width: 8px;
    }

    ::-webkit-scrollbar-track {
      background: #fff;
    }

    ::-webkit-scrollbar-thumb {
      background: #ccc;
    }
  }
`;
