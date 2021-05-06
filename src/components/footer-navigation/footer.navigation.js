import React from 'react';
import { withRouter } from 'react-router';

import { BiFoodMenu } from 'react-icons/bi';
import { GiShoppingCart} from 'react-icons/gi';
import { FaRegCheckCircle } from 'react-icons/fa';

import {Container, NavItem } from './footer.styles';

const FooterNav = ({history})  => {
  
  const goToPage = path => {
    history.push(path);
  }

  return(
    <Container>
      <NavItem onClick={() => goToPage('/')}>      
        <BiFoodMenu size={30} />
        <h4>Menu</h4>
      </NavItem>
      <NavItem onClick={() => goToPage('/cart')}>      
        <GiShoppingCart size={30} />
        <h4>Basket</h4>
      </NavItem>
      <NavItem onClick={() => goToPage('/checkout')}>        
        <FaRegCheckCircle size={30} />
        <h4>Order</h4>
      </NavItem>
    </Container>
  )
}

export default withRouter(FooterNav);