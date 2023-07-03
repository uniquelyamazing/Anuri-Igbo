import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../components/Home';
import Alphabet from '../components/Alphabet';
import Fruits from '../components/Fruits';
import Numbers from '../components/Numbers';
import Animals from '../components/Animals';
import Colors from '../components/Colors';
import ResultsScreen from '../components/ResultsScreen';
import QuizScreen from '../components/QuizScreen';
import HomeScreen from '../components/HomeScreen';
import LoginScreen from '../Screens/LoginScreen';
import RegisterScreen from '../Screens/RegisterScreen';
import WelcomeScreen from '../Screens/WelcomeScreen';
import Basics from '../components/Basics';


const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer style={styles.View}>
      <Stack.Navigator>
        <Stack.Screen options={{ headerShown: false }} name="welcome" component={WelcomeScreen} />
        <Stack.Screen options={{ headerShown: false }} name="Register" component={RegisterScreen} />
        <Stack.Screen options={{ headerShown: false }} name="Login" component={LoginScreen} />
        <Stack.Screen options={{ headerShown: false }} name="Home" component={Home} />
        <Stack.Screen options={{ headerShown: false }} name="Alphabet" component={Alphabet} />
        <Stack.Screen options={{ headerShown: false }} name="Numbers" component={Numbers} />
        <Stack.Screen options={{ headerShown: false }} name="Fruits" component={Fruits} />
        <Stack.Screen options={{ headerShown: false }} name="Colors" component={Colors} />
        <Stack.Screen options={{ headerShown: false }} name="Animals" component={Animals} />
        <Stack.Screen options={{ headerShown: false }} name="HomeScreen" component={HomeScreen} />
        <Stack.Screen options={{ headerShown: false }} name="Basics" component={Basics} />
        <Stack.Screen name="Quiz" component={QuizScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Results" component={ResultsScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  View: {
    backgroundColor: '#73030F',
  },
});
