import React from 'react';
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux/es/exports';
import { legacy_createStore as createStore } from 'redux';
import { App } from '@pages/App';
import { rootReducer } from './reducers/rootReducer';
// import * as serviceWorker from './serviceWorker';


const store = createStore(
  rootReducer
);

const container = document.getElementById('root')
const root = createRoot(container)
root.render(
  <Provider store={store}>
    <App />
  </Provider>
)


