import { Provider } from 'react-redux';
import Orthagonal from './App';
import store from './app/store';

function Bootstrap() {
  return (
    <Provider store={store}>
      <Orthagonal />
    </Provider>
  );
}

export default Bootstrap;
