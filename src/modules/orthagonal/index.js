import { Provider } from 'react-redux';
import App from './App';
import store from './app/store';

function ER101() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

export default ER101;
