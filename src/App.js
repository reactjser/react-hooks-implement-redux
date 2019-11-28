import React, { useReducer } from 'react';
import { Provider } from './myRedux';
import CountAdd from './views/CountAdd';
import CountMinus from './views/CountMinus';

function App() {
  const initialState = {
    count: 0,
  };

  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case 'ADD':
        return { count: state.count + action.payload };
      case 'MINUS':
        return { count: state.count - action.payload };
      default:
        return state;
    }
  }, initialState);

  return (
    <Provider value={{ state, dispatch }}>
      <CountAdd />
      <CountMinus />
    </Provider>
  );
}

export default App;
