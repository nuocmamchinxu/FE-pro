import React from 'react';
import ReactDOM from 'react-dom/client';

import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'nprogress/nprogress.css';
import { PersistGate } from 'redux-persist/integration/react'
import {
  BrowserRouter
} from "react-router-dom";
import Layout from './Layout';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      {/* <React.StrictMode> */}
      <BrowserRouter>
        <Layout />
      </BrowserRouter >

      {/* </React.StrictMode> */}
    </PersistGate>
  </Provider >
);


reportWebVitals();
