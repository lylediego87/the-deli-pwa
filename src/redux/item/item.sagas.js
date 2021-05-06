import { takeLatest, put, all, call } from 'redux-saga/effects';

import itemActionTypes from './item.types';
import { firestore, transformItems } from '../../firebase/firebase.utils';
import { fetchFoodItemsSuccess, fetchFoodItemsFailure } from './item.actions';

export function* fetchFoodItemsAsync() {
  try {
    const itemsRef = firestore.collection('items');
    const snapshot = yield itemsRef.get();
    const items = yield call(transformItems, snapshot);
    yield put(fetchFoodItemsSuccess(items));
  } catch (error) {
    yield put(fetchFoodItemsFailure(error));
  }
}

export function* onFetchFoodItemsStart() {
  yield takeLatest (itemActionTypes.FETCH_FOOD_ITEMS_START, fetchFoodItemsAsync);
}

export function* itemSagas() {
  yield all([call(onFetchFoodItemsStart)]);
}