import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
// import { store } from './app/store';
// import App from './App';
import './styles';
// import Modules from './modules';
import SoundComputer from './solo';
import store from './solo/app/store';

const container = document.getElementById('root');
const root = createRoot(container);

// console.log(store.getState());

root.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <App /> */}
      <SoundComputer />
    </Provider>
  </React.StrictMode>
);
