import React from 'react';
import Todo from './src/component/Todo';
import store from './src/component/Redux/store'
import { Provider } from 'react-redux'

const App = () => {

  return (
    <Provider store={store}>
      <Todo />
    </Provider>
  );
};

export default App;
