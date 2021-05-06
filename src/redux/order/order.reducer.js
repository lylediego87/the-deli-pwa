import orderActionTypes from './order.types';

const INITIAL_STATE = {
  orders: []
}

const orderReducer = (state = INITIAL_STATE, action) => {

  switch(action.type) {
    case orderActionTypes.PLACE_ORDER_SUCCESS:
    default:
      return {
        ...state,
        orders: []
      }
  }
}

export default orderReducer;