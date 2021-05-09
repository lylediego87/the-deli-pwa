import styled from 'styled-components';


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 20px;
    h3 {
      text-align: center;
      margin: 0;
    }
`;

export const InfoBlock = styled.div`
  padding: 10px 0;
  display: flex;
  flex-direction: row;
  align-items: center;
    strong {
      flex-grow: 2;
    }

    h5 {
      margin: 0;
    }
`;

export const ErrorMsg = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  color: red;
  font-size: 0.8rem;
  margin-bottom: 5px;
  margin-top: -5px;
`;

export const RadioGroup = styled.div`
  display:  flex;
  flex-direction: column;
`;

export const RadioBlock = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

    h5 {
      margin: 0;
    }
`;