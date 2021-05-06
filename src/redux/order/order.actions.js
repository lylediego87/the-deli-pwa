import orderActionTypes from './order.types';

export const placeOrderStart = order => ({
  type: orderActionTypes.PLACE_ORDER_START,
  payload: order
});

export const placeOrderSuccess = () => ({
  type: orderActionTypes.PLACE_ORDER_SUCCESS
})

export const placeOrderFailure = () => ({
  type: orderActionTypes.PLACE_ORDER_FAILURE
})