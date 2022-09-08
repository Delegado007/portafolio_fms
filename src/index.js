import React from 'react';
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux/es/exports';
import { compose, applyMiddleware, legacy_createStore as createStore } from 'redux';
import thunk from 'redux-thunk';
import { App } from '@pages/App';
import { logger } from '@middlewares';
import { rootReducer } from './reducers/rootReducer';

const composeAlt = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const composedEnhancers = composeAlt(applyMiddleware(thunk, logger));
const store = createStore(
  rootReducer,
  composedEnhancers
);

const container = document.getElementById('root')
const root = createRoot(container)
root.render(
  <Provider store={store}>
    <App />
  </Provider>
)
