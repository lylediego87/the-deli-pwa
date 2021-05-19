import React from 'react';
import { connect } from 'react-redux';

import { Container, InfoLine, Order } from './my-orders.styles';
import { selectUserOrders } from '../../redux/user/user.selectors';

const MyOrders = ({myOrders}) => (
  <Container  exit={{ opacity: 0 }}>
    <h4>My Recent Orders</h4>
    <h6>open - Preparing your order</h6>
    <h6 style={{marginBottom: '20px'}}>completed - Order is ready for delivery/pickup </h6>
    {
      myOrders.map(order => 
        <Order key={order.id}>
          <InfoLine>
            <h6>Order placed at</h6>
            <span>{order.timestamp.toDate().toTimeString().substr(0,8)}</span>
          </InfoLine>
          <InfoLine>
            <h6>Status</h6>
            <span>{order.status}</span>
          </InfoLine>
          <InfoLine>
            <h6>Delivery Method</h6>
            <span>{order.deliveryMethod}</span>
          </InfoLine>
          <InfoLine>
            <h6>Payment Method</h6>
            <span>{order.paymentMethod}</span>
          </InfoLine>
          <InfoLine>
          <h6>Items</h6>
          <span></span>
        </InfoLine>
          {
            order.items.map(item => 
              <InfoLine key={item.id}>
              <h6>{item.name}</h6>
              <span> x {item.quantity}</span>
              </InfoLine>
            )
          }
          <InfoLine>
            <h6>Total Amount</h6>
            <span>{order.totalCost}</span>
          </InfoLine>
        </Order>
      )
    }
  </Container>
)

const mapStateToProps = state => ({
  myOrders: selectUserOrders(state)
});

export default connect(mapStateToProps, null)(MyOrders);