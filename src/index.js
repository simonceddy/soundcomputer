/* eslint-disable no-underscore-dangle */
import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import jzz from 'jzz';
import { store } from './app/store';
import App from './App';
import './styles';

const container = document.getElementById('root');
const root = createRoot(container);

const logger = jzz.Widget({ _receive(msg) { console.log(msg.toString()); } });
jzz.addMidiOut('Console Logger', logger);
const port = jzz().openMidiOut('Console Logger');
navigator.requestMIDIAccess = jzz.requestMIDIAccess;

console.log(port.emit());

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
