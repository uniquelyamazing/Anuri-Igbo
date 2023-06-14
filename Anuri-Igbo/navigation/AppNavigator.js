
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../components/Home';
import Alphabet from '../components/Alphabet'
import { StyleSheet } from 'react-native';
import Fruits from '../components/Fruits';
import Numbers from '../components/Numbers';

import Animals from '../components/Animals';
import Colors from '../components/Colors';


const Stack = createNativeStackNavigator();
export default function AppNavigator() {

  return (
    <NavigationContainer style={styles.View}>
      <Stack.Navigator>
        <Stack.Screen options={{headerShown: false}} name="Home" component={Home} />
        <Stack.Screen options={{headerShown: false}} name="Alphabet" component={Alphabet} />
       <Stack.Screen options={{headerShown: false}} name="Numbers" component={Numbers} />
       <Stack.Screen options={{headerShown: false}} name="Fruits" component={Fruits} />
       <Stack.Screen options={{headerShown: false}} name="Colors" component={Colors} />
       <Stack.Screen options={{headerShown: false}} name="Animals" component={Animals} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
View: {
    backgroundColor: '#73030F',
  },})