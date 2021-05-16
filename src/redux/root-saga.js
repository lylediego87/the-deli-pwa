import { all, call} from 'redux-saga/effects';

import { userSagas } from './user/user.sagas';
import { itemSagas } from './item/item.sagas';
import { orderSagas } from './order/oder.sagas';
import { notificationSagas } from './notification/notification.sagas';

export default function* rootSaga() {
  yield all([
    call(userSagas),
    call(itemSagas),
    call(orderSagas),
    call(notificationSagas)
  ]);
}