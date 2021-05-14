import styled from 'styled-components';
import { TiDelete } from 'react-icons/ti';

export const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 0;
`;

export const Name = styled.strong`
  flex-grow: 2;
`;


export const Total = styled.strong`
  flex-grow: 1;
`;

export const TiDeleteStyled = styled(TiDelete)`
  cursor: pointer;
`;