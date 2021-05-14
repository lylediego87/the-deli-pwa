import React from 'react';
import { useLocation } from "react-router-dom";
import { withRouter } from 'react-router';

import {Container, NavItem, GiShoppingCartStyled, FaRegCheckCircleStyled, BiFoodMenuStyled } from './footer.styles';

const FooterNav = ({history})  => {
  
  const goToPage = path => {
    history.push(path);
  }

  return(
    <Container>
      <NavItem onClick={() => goToPage('/')} >      
        <BiFoodMenuStyled size={30} location={useLocation().pathname} />
        <h4>Menu</h4>
      </NavItem>
      <NavItem onClick={() => goToPage('/cart')}>      
        <GiShoppingCartStyled size={30} location={useLocation().pathname} />
        <h4>Basket</h4>
      </NavItem>
      <NavItem onClick={() => goToPage('/checkout')} >        
        <FaRegCheckCircleStyled size={30} location={useLocation().pathname} />
        <h4>Order</h4>
      </NavItem>
    </Container>
  )
}

export default withRouter(FooterNav); 