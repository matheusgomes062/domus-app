import * as React from 'react';
import { Routes } from './routes';
import 'react-native-gesture-handler';
import store from './store/index';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
        <Routes/>
    </Provider>
    
  );
}

export default App;