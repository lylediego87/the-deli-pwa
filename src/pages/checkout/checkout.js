import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useForm } from "react-hook-form";
import moment from 'moment';

import { Container, InfoBlock, RadioBlock, RadioGroup, ErrorMsg } from './checkout.styles';
import { selectCartTotal, selectCartItemsCount, selectCartItems } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { placeOrderStart } from '../../redux/order/order.actions';

const Checkout = ({cartItems,totalCost,totalItems, user, placeOrder}) => {

  const { register, formState: { errors }, handleSubmit } = useForm();

  const [ delivery, setDelivery ] = useState(false);

  const onSubmit = data => {
    const order = {
      displayName: user.displayName,
      email: user.email,
      items: cartItems,
      totalItems: totalItems,
      totalCost: totalCost,
      address: data.address === undefined ? "" : data.address ,
      phoneNo: data.phone  === undefined ? "" : data.phone,
      deliveryMethod: data.deliveryMethod,
      paymentMethod: data.paymentMethod,
      status: "open",
      timestamp: moment()._d
    }
    placeOrder(order);
  }

  return(
    <Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h3>Checkout</h3>
        <InfoBlock>
          <strong>Name</strong>
          <h5>{user.displayName}</h5>
        </InfoBlock>
        <InfoBlock>
          <strong>Email</strong>
          <h5>{user.email}</h5>
        </InfoBlock>
        <InfoBlock>
          <strong>Phone No</strong>
          <input type="text" id="phone" name="phone" 
            {...register("phone", {required: true, pattern: /^[0-9\s]{10}$/})} />
        </InfoBlock> 
        <ErrorMsg>
          {errors.phone && errors.phone.type === 'required' && "Phone No is required"}
          {errors.phone && errors.phone.type === 'pattern' && "Example 0793097768"}
        </ErrorMsg>
        <InfoBlock>
          <strong>Number of Items</strong>
          <h5>{totalItems}</h5>
        </InfoBlock>
        <InfoBlock>
          <strong>Total Cost</strong>
          <h5>{totalCost}</h5>
        </InfoBlock>

        <InfoBlock>
          <strong>Delivery Method</strong>
          <RadioGroup>
            <RadioBlock>
              <input type="radio" id="pickup" name="pickup" {...register("deliveryMethod", {required: true})} 
                value="pickup" onClick={() => setDelivery(false)} />
              <h5>Pickup</h5>
            </RadioBlock>                
            <RadioBlock>
              <input type="radio" id="deliver" name="delivery" {...register("deliveryMethod", {required: true})}  
                value="delivery" onClick={() => setDelivery(true)} />
              <h5>Delivery</h5>
            </RadioBlock>                   
          </RadioGroup>
        </InfoBlock>
        <ErrorMsg>
          {errors.deliveryMethod && errors.deliveryMethod.type === 'required' && "Please select delivery method"}
        </ErrorMsg>

        {delivery ? 
          <div>
            <InfoBlock>
             <strong>Address</strong>
             <input type="text" id="address" name="address" 
              {...register("address", {required: delivery })}  />
            </InfoBlock>
            <ErrorMsg>
              {errors.address && errors.address.type === 'required' && "Address is required"}
            </ErrorMsg>            
          </div> : null} 

        <InfoBlock>
          <strong>Payment Method</strong>
          <RadioGroup>
            <RadioBlock>
              <input type="radio" id="cash" name="payment" value="cash" 
                {...register("paymentMethod", {required: true})} />
              <h5>Cash</h5>
            </RadioBlock>
            <RadioBlock>
              <input type="radio" id="online" name="payment" value="online" 
                {...register("paymentMethod", {required: true})} />
             <h5>Pay Now</h5>
            </RadioBlock>
          </RadioGroup>
        </InfoBlock>
        <ErrorMsg>
          {errors.paymentMethod && errors.paymentMethod.type === 'required' && "Please select payment method"}
        </ErrorMsg>
        <button type="submit">Place Order</button>
      </form>
    </Container>
  )
}

const mapStateToProps = state => ({
  totalCost: selectCartTotal(state),
  totalItems: selectCartItemsCount(state),
  user: selectCurrentUser(state),
  cartItems: selectCartItems(state)
});

const mapDispatchToProps = dispatch => ({
  placeOrder: order => dispatch(placeOrderStart(order))
});

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);