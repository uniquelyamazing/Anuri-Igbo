import React, { useEffect } from 'react';
import AppNavigator from './navigation/AppNavigator';
import { View } from 'react-native';
import { setPersistence, browserLocalPersistence } from 'firebase/auth';
import { auth } from './firebaseConfig';
export default function App (){
 
       const configureAuthPersistence = async () => {
              try {
                await setPersistence(auth, browserLocalPersistence);
                console.log('Auth persistence set to local');
              } catch (error) {
                console.log('Failed to set auth persistence', error);
              }
            };
            
            // Call the configureAuthPersistence function in your app's entry point or wherever you initialize Firebase
            configureAuthPersistence();
 return (
  <View style={{flex:1}} >
         <AppNavigator/>
  </View>
 )
};
