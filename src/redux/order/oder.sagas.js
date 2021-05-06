import { takeLatest, put, all, call } from 'redux-saga/effects';
import { push } from "connected-react-router";

import orderActionTypes from './order.types';
import { placeOrderSuccess, placeOrderFailure} from './order.actions';
import { createOrder } from '../../firebase/firebase.utils';
import { clearCart } from '../cart/cart.actions';

export function* placeOrder({payload}){
  try { 
    yield call(createOrder, payload);
    yield put(placeOrderSuccess());
    yield put(clearCart());
    yield put(push('/'));
  } catch (error) {
    yield put(placeOrderFailure(error));
  }
}

export function* onPlaceOrderStart(){
  yield takeLatest(orderActionTypes.PLACE_ORDER_START, placeOrder);
}

export function* orderSagas() {
  yield all([
    call(onPlaceOrderStart)
  ])
}