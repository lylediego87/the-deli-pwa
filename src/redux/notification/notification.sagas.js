import { takeLatest, put, all, call } from 'redux-saga/effects';
import uniqid from 'uniqid';

import userActionTypes from '../user/user.types';
import orderActionTypes from '../order/order.types';
import { pushNotification } from './notification.actions';

export function* displayAuthInNote({payload: {email} }){
  yield put(pushNotification({title: `${email}`, message: "You have successfully signed in", id: uniqid()}));
}

export function* displayAuthOutNote(){
  yield put(pushNotification({title: `Signed Out`, message: "", id: uniqid(), level: "error"}));
}


export function* displayPlacedOrderNote() {
  yield put(pushNotification({title: `Thank You`, message: "We will notify you via sms", id: uniqid()}));
}

export function* onSignInSuccess() {
  yield takeLatest(userActionTypes.SIGN_IN_SUCCESS, displayAuthInNote);
}

export function* onSignOutSuccess() {
  yield takeLatest(userActionTypes.SIGN_OUT_SUCCESS, displayAuthOutNote)
}

export function* onPlaceOrderSuccess() {
  yield takeLatest(orderActionTypes.PLACE_ORDER_SUCCESS, displayPlacedOrderNote);
}

export function* notificationSagas() {
  yield all([
    call(onSignInSuccess),
    call(onPlaceOrderSuccess),
    call(onSignOutSuccess)
  ])
} 