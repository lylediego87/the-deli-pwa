import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router'

import userReducer from './user/user.reducer';
import itemReducer from './item/item.reducer';
import cartReducer from './cart/cart.reducer';
import orderReducer from './order/order.reducer';

const rootReducer = history => combineReducers({
  router: connectRouter(history),
  user: userReducer,
  item: itemReducer,
  cart: cartReducer,
  order: orderReducer
});

export default rootReducer;