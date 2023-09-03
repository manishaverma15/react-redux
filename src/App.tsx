import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Form from './components/Form/Form';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Form />
    </Provider>
  );
};

export default App;
