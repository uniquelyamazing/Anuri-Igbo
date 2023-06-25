import { useEffect } from 'react';
import { auth } from './firebaseConfig';

import AppNavigator from './navigation/AppNavigator';

const App = ({ navigation }) => {
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        navigation.navigate('Home');
      } else {
        navigation.navigate('Login');
      }
    });

    return () => unsubscribe(); // Clean up the event listener
  }, []);

  // Rest of your app code
};
export default App