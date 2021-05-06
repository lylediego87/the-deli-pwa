import styled from 'styled-components';

export const Container = styled.div`
  height: 80vh;
  display: flex;
  flex-direction: column;
  padding: 10px 20px;
    h3 {
      text-align: center
    }
`;

export const Total = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px 5px;
  border-top: 1px solid;
  border-image:linear-gradient(to right, rgba(225, 177, 44,0), rgba(225, 177, 44,1), rgba(225, 177, 44,0)) 1;

  strong {
    flex-grow: 5;
  }

  div {
    font-size: 1.2rem;
    flex-grow: 2;
  }
`;

