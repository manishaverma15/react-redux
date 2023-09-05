import React from 'react';
import { Provider } from 'react-redux';
import Form from './features/Form/Form';
import { store } from './store';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Form />
    </Provider>
  );
};

export default App;
