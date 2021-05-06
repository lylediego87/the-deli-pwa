import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 10px 10px;

  a {
    text-decoration: none;
  }
`;

export const Place = styled(Link)`
  color: #00a8ff;
  font-family: Arial, Helvetica, sans-serif;
  padding-right: 10px;
`;

export const Category = styled.div`
  font-family: Arial, Helvetica, sans-serif;
`;