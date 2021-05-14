import React from 'react';
import { connect } from 'react-redux';


import { Container, Name, Total, TiDeleteStyled } from './cart-item.styles';
import { removeItemFromCart } from '../../redux/cart/cart.actions';

const CartItem = ({item,removeItem}) => (
  <Container>
    <Name>{item.name} x {item.quantity}</Name>
    <Total>{item.quantity * item.price}</Total>
    <TiDeleteStyled size={30} onClick={ () => removeItem(item)} />
  </Container>
)

const mapDispatchToProps = dispatch => ({
  removeItem: item => dispatch(removeItemFromCart(item))
})

export default connect(null, mapDispatchToProps)(CartItem);