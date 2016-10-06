import React from 'react';
import {render} from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux';
import './index.css';
import {store} from './reducers.js';

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
