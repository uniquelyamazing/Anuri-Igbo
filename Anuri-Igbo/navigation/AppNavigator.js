import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AuthContext } from '../auth/authContext';
import ProfileScreen from '../Screens/ProfileScreen';
import SignupScreen from '../Screens/SignupScreen';
import LoginScreen from '../Screens/LoginScreen';
const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  const { user } = useContext(AuthContext);

  return (
    <NavigationContainer>
      <Tab.Navigator>
      <Tab.Screen name="Signup" component={SignupScreen} />
        <Tab.Screen name="Login" component={LoginScreen} />
        {user ? (
          <Tab.Screen name="Profile" component={ProfileScreen} />
        ) : null}
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
