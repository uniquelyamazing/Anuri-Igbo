import React from 'react';
import AuthContextProvider from './auth/authContext';
import AppNavigator from './navigation/AppNavigator';

const App = () => {
  return (
    <AuthContextProvider>
      <AppNavigator />
    </AuthContextProvider>
  );
};

export default App;
