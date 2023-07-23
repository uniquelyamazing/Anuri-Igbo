import React, { useEffect, useState ,useCallback} from 'react';
import AppNavigator from './navigation/AppNavigator';
import { View, StatusBar } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Home from './components/Home';
import { signOut } from 'firebase/auth';
import { auth } from './firebaseConfig';

export default function App() {
  const [user, setUser] = useState();

  useEffect(() => {
    checkLoginStatus();
  }, []);

  const checkLoginStatus = async () => {
    try {
      // Check the AsyncStorage for the login status flag
      const loginStatus = await AsyncStorage.getItem('loginStatus');

      if (loginStatus === 'loggedIn') {
        // User is logged in
        setUser(true);
      } else {
        // User is not logged in
        setUser(false);
      }
    } catch (error) {
      // Handle error if needed
      console.error('Error occurred while checking login status:', error);
    }
  };


  const handleLogout = useCallback(async () => {
       try {
         // Perform logout actions, such as clearing user data and logging out from Firebase
         await signOut(auth);
     
         // Clear the login status flag from AsyncStorage
         await AsyncStorage.removeItem('loginStatus');
     
         // Update the user state to indicate that the user is logged out
         setUser(false);
     
         // Navigate to the AppNavigator (WelcomeScreen or LoginScreen)
         navigation.navigate('AppNavigator');
       } catch (error) {
         console.log('Logout failed', error.message);
       }
     }, []);
     
  return (
    <View style={{ flex: 1 }}>
    <StatusBar style="auto" />
      {user ? <Home handleLogout={handleLogout} /> : <AppNavigator />}
    </View>
  );
}
