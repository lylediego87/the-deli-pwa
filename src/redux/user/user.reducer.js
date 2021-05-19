import userActionTypes from './user.types';

const INITIAL_STATE = {
  currentUser: null,
  userOrders: []
}

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case userActionTypes.SIGN_IN_FAILURE:
    case userActionTypes.SIGN_OUT_FAILURE:
      return {
        ...state,
        error: action.payload
      }
    case userActionTypes.SIGN_OUT_SUCCESS:
      return {
        ...state,
        error: null,
        currentUser: null,
        userOrders: []
      } 
    case userActionTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        error: null 
      }
    case userActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload
      }
    case userActionTypes.GET_USER_ORDERS_SUCCESS:
      return {
        ...state,
        userOrders: action.payload
      }
    default:
      return state;
  }
}

export default userReducer;