import { takeLatest, put, all, call, take } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';
import { push } from "connected-react-router";

import userActionTypes from './user.types';
import { signInFailure, signInSuccess, signOutFailure, 
        signOutSuccess, getUserOrdersFailure, getUserOrdersSuccess } from './user.actions';
import { auth, GoogleSignIn, FacebookSignIn, getCurrentUser, firestore } from '../../firebase/firebase.utils';

export function* signInWithFacebook() {
  try {
    const data = yield FacebookSignIn();

    yield put(signInSuccess({
      displayName: data.additionalUserInfo.profile.name , 
      email: data.additionalUserInfo.profile.email , 
      photoUrl: data.additionalUserInfo.profile.picture.data.url}));
  } catch (error) {
    yield put(signInFailure(error));
  }
}
export function* signInWithGoogle() {
  try { 
    const { user } = yield GoogleSignIn();
    yield put(signInSuccess({displayName: user['displayName'] , email: user['email'] , photoUrl: user['photoURL']}))
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* isUserAuthenticated() {
  try{
    const user = yield getCurrentUser();
    if(!user) return;
    yield put(signInSuccess({displayName: user['displayName'] , email: user['email'] , photoUrl: user['photoURL']}))
  }
  catch(error){
    yield put(signInFailure(error));
  }
}

export function* signOut(){
  try {
    yield auth.signOut();
    yield put(signOutSuccess());
    yield put(push('/'));
  } catch (error) {
    yield put(signOutFailure(error))
  }
}

export function* getUserOrders(){
  const user = yield getCurrentUser();
  if(!user) return;
  const ref = firestore.collection('orders').where('email', '==', user['email'] ).where('status', '!=', 'closed' );
  const channel = eventChannel(emit => ref.onSnapshot(emit));
  try {
    while(true){
      const data = yield take(channel);
      let orders = [];
      data.forEach((doc) => {
        orders.push(doc.data());
      });
      yield put(getUserOrdersSuccess(orders));
    }
  } catch (error) {
    yield put(getUserOrdersFailure(error));
  }
}

export function* onSignInSuccess() {
  yield takeLatest(userActionTypes.SIGN_IN_SUCCESS, getUserOrders);
}

export function* onFacebookSignInStart() {
  yield takeLatest(userActionTypes.FACEBOOK_SIGN_IN_START, signInWithFacebook);
}

export function* onGoogleSignInStart() {
  yield takeLatest(userActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* onCheckUserSession() {
  yield takeLatest(userActionTypes.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* onSignOutStart() {
  yield takeLatest(userActionTypes.SIGN_OUT_START, signOut);
}

export function* userSagas() {
  yield all([
    call(onGoogleSignInStart),
    call(onFacebookSignInStart),
    call(onCheckUserSession),
    call(onSignOutStart),
    call(onSignInSuccess)
  ]);
}