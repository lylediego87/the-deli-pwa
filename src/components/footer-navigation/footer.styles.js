import styled, { css } from 'styled-components';
import { GiShoppingCart} from 'react-icons/gi';
import { BiFoodMenu } from 'react-icons/bi';
import { FaRegCheckCircle } from 'react-icons/fa';

export const Container = styled.div`
  height: 13vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #00280b;
  color: #fff;
`;

const isActiveFa = props => {
    if(props.location === '/checkout')
      return Active
}

const isActiveBi = props => {
  if(props.location === '/' || props.location.includes('place') )
    return Active
}

const isActiveGi = props => {
  if(props.location === '/cart')
    return Active
}


const Active = css`
  color: #e1b12c;
`;
export const FaRegCheckCircleStyled = styled(FaRegCheckCircle)`
  ${isActiveFa}
`;

export const BiFoodMenuStyled = styled(BiFoodMenu)`
  ${isActiveBi}
`;


export const GiShoppingCartStyled = styled(GiShoppingCart)`
  ${isActiveGi}
`;

export const NavItem = styled.div`
  padding: 5px;
  cursor: pointer;
  h4 {
    margin: 0;
  }
`;
