import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

import './index.css';
import App from './App';

import store from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('task-manager-root'));

root.render(
  <React.StrictMode>
    <ToastContainer bodyStyle={{ fontFamily: 'Roboto' }} />
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
