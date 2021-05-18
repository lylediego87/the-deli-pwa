import React from 'react';
import { connect } from 'react-redux';
import { TiDelete } from 'react-icons/ti';

import { Container, Name, Total, MotionButton } from './cart-item.styles';
import { removeItemFromCart } from '../../redux/cart/cart.actions';

const CartItem = ({item,removeItem}) => (
  <Container>
    <Name>{item.name} x {item.quantity}</Name>
    <Total>{item.quantity * item.price}</Total>
    <MotionButton onClick={ () => removeItem(item)} whileTap={{ scale: 1.2, color: "#00a8ff" }}>
      <TiDelete size={30} />
    </MotionButton>
  </Container>
)

const mapDispatchToProps = dispatch => ({
  removeItem: item => dispatch(removeItemFromCart(item))
})

export default connect(null, mapDispatchToProps)(CartItem);