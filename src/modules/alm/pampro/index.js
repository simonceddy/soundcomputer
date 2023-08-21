import { Provider } from 'react-redux';
import store from './app/store';
import Pam from './Pam';

function PamelasProWorkout() {
  return (
    <Provider store={store}>
      <Pam />
    </Provider>
  );
}

export default PamelasProWorkout;
