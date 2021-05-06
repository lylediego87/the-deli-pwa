import { createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from 'connected-react-router'
import { createBrowserHistory } from 'history'

import rootReducer from './root-reducer';
import rootSaga from './root-saga';


export const history = createBrowserHistory()

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware, routerMiddleware(history)];

if(process.env.NODE_ENV === 'development'){
  middlewares.push(logger);
}

export const store = createStore(rootReducer(history), applyMiddleware(...middlewares));

sagaMiddleware.run(rootSaga);
