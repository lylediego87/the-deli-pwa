import cartActionTypes from './cart.types';

import { addItemToCart, removeItemFromCart } from './cart.utils';

const INITIAL_STATE = {
  cartItems: []
}

const cartReducer = (state = INITIAL_STATE, action) => {

  switch(action.type) {
    case cartActionTypes.ADD_ITEM_TO_CART:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload)
      }
    case cartActionTypes.REMOVE_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload)
      }
    case cartActionTypes.CLEAR_CART:
      return {
        ...state,
        cartItems: []
      }
    default:
      return {
        ...state
      }
  }
}

export default cartReducer;