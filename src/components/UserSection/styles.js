import styled from 'styled-components';

export const Container = styled.div`
  grid-area: US;
  
  height: 100vh;

  display: flex;
  flex-direction: column;

  margin-top: 20px;

  overflow-y: scroll;

  ::-webkit-scrollbar{
    display: none;
  }

  div {
    margin-top: 12px;
    padding-bottom: 12px;
    box-shadow: rgba(0,0,0,0.2) 1px 1px 0 1px;

    span{
      display: block;

      padding: 10px 28px;
      margin-bottom: 10px;

      font-size: 16px;
      font-weight: 700;
      color: #777;
      
    }

    ul{
      padding: 10px 28px;
      
      li{
        a{
          font-size: 13px;
          font-weight: 500;
          color: #666;
          margin-right: 5px;
        }

        p{
          font-size: 13px;
          color: #888;
        }
      } 
    }
  }
`;
