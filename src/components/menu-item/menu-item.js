import React from 'react';
import { connect } from 'react-redux';

import { FaPlus } from 'react-icons/fa';

import { Container, TopDiv, TopDivText, BottomDiv } from './menu-item.styles';
import { addItemToCart } from '../../redux/cart/cart.actions';

const MenuItem = (props) => {
  const { name, price, description} = props.item;

  const addToCart = () => {
    props.addItem(props.item);
  }
  return(
  <Container>
    <TopDiv>
      <TopDivText style={{flexGrow: '1'}}>{name} - {price}</TopDivText>
      <TopDivText style={{flexGrow: '0'}}><FaPlus onClick={ () => addToCart() } /></TopDivText>
    </TopDiv>
    <BottomDiv>{description}</BottomDiv>
  </Container>
)}

const mapDispatchToProps = dispatch => ({
  addItem: (item) => dispatch(addItemToCart(item))
});
export default connect(null, mapDispatchToProps)(MenuItem);