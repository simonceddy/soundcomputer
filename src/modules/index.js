import { Provider } from 'react-redux';
import store from './app/store';
import App from './App';

function Modules() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

export default Modules;
