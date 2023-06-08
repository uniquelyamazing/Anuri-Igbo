/*import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//import { AuthContext } from '../auth/authContext';
//import ProfileScreen from '../Screens/ProfileScreen';
//import SignupScreen from '../Screens/SignupScreen';
//import LoginScreen from '../Screens/LoginScreen';
import ButtonHost from '../components/ButtonHost';
import Alphabet from '../components/Alphabet'
import Home from '../components/Home'
const Stack = createStackNavigator();

const AppNavigator = () => {
  ///const { user } = useContext(AuthContext);

  return (
    <NavigationContainer>
     {/* <Tab.Navigator>
      <Tab.Screen name="Signup" component={SignupScreen} />
        <Tab.Screen name="Login" component={LoginScreen} />
        {user ? (
          <Tab.Screen name="Profile" component={ProfileScreen} />
        ) : null}
      </Tab.Navigator>
      <Stack.Navigator>
      <Stack.Screen name='Home' component={Home}/>
      <Stack.Screen name="Alphabet" component={Alphabet} />
     
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
*/
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../components/Home';
import Alphabet from '../components/Alphabet'

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Alphabet" component={Alphabet} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
