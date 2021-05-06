import React from 'react';
import { connect } from 'react-redux';

import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';
import { Container, Total} from './cart.styles';
import CartItem from '../../components/cart-item/cart-item';

const Cart = ({cartItems, cartTotal, removeItem}) => (
  <Container>
  {cartItems.length > 0 ? <h3> Your Order </h3> : <h3>Your order is empty</h3>}
    { 
     cartItems.map(item => 
        <CartItem item={item} key={item.id} />
      )
    }
    <Total>
      <strong>Total</strong>
      <div>{cartTotal}</div>
    </Total>
  </Container>
)

const mapStateToProps = state => ({
  cartItems: selectCartItems(state),
  cartTotal: selectCartTotal(state)
})



export default connect(mapStateToProps, null)(Cart);