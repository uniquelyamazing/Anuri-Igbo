import React from 'react';
import AuthContextProvider from './auth/authContext';
import { Home } from './components/Home';
import AppNavigator from './navigation/AppNavigator';

const App = () => {
  return (
    //<AuthContextProvider>
    <AppNavigator/>
    //</AuthContextProvider>
  );
};

export default App;
