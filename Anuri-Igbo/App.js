import React, { useEffect } from 'react';

import AppNavigator from './navigation/AppNavigator';
import { View } from 'react-native';
import LoginScreen from './Screens/LoginScreen';
import Home from './components/Home';
import Slider from './components/Slider';
import AlphabetsData from './components/Alphabet';
import Basics from './components/Basics';
import PageSlider from './Screens/DashBoard';
import Numbers from './components/Numbers';
import Fruits from './components/Fruits';
import Animals from './components/Animals';
import Colors from './components/Colors';
import Family from './components/Family';
import Words from './components/Words';
//import QuizScreen from './components/QuizScreen';
//import ResultScreen from './components/ResultsScreen';

export default function App (){
 
   
 return (
  <View style={{flex:1}} >
         <AppNavigator/>
  </View>
 )
};
