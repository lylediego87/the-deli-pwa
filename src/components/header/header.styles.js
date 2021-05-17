import styled from 'styled-components';
import { Link } from 'react-router-dom';
export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const HeaderContainer = styled.div`
  height: 13vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: #00280b;
`;

export const HeaderMenu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 10px 10px;
  height: 8vh;
  background-color: #00280b;
  border-top: 2px solid;
  border-image:linear-gradient(to right, rgba(225, 177, 44,0), rgba(225, 177, 44,1), rgba(225, 177, 44,0)) 1;
`;

export const MenuLink = styled(Link)`  
  text-decoration: none;
  color: #fff;
`;

export const LogoContainer = styled.div`
  flex-grow: 1;
  height: 10vh;
  padding: 5px 5px;
`;

export const Logo = styled.img`
  max-width:100%;
  max-height:100%;
`;

