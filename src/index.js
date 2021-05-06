import React from 'react';
import ReactDOM from 'react-dom';
import HttpsRedirect from 'react-https-redirect';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router'
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

import './index.css';
import App from './App';
import { store, history } from './redux/store';

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <HttpsRedirect>
        <App />
      </HttpsRedirect>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);

serviceWorkerRegistration.register();