import React from 'react';
import { connect } from 'react-redux';
import { FaPlus } from 'react-icons/fa';

import { Container, TopDiv, TopDivText, BottomDiv, MotionButton } from './menu-item.styles';
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
      <TopDivText style={{flexGrow: '0'}}>
        <MotionButton onClick={ () => addToCart() } whileTap={{ scale: 1.2, color: "#00a8ff" }} >
          <FaPlus size={25} />
        </MotionButton>
      </TopDivText>
    </TopDiv>
    <BottomDiv>{description}</BottomDiv>
  </Container>
)}

const mapDispatchToProps = dispatch => ({
  addItem: (item) => dispatch(addItemToCart(item))
});
export default connect(null, mapDispatchToProps)(MenuItem);