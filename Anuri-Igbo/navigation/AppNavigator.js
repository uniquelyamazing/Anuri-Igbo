import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../components/Home';
import Alphabet from '../components/Alphabet';
import Fruits from '../components/Fruits';
import Numbers from '../components/Numbers';
import Animals from '../components/Animals';
import Colors from '../components/Colors';
import ResultsScreen from '../components/QuizFolder/ResultsScreen';
import QuizScreen from '../components/QuizFolder/QuizScreen';
import QuizScreenColors from '../components/QuizFolder/QuizScreenColors';
import QuizScreenAnimals from '../components/QuizFolder/QuizScreenAnimals';
import QuizScreenFamily from '../components/QuizFolder/QuizScreenFamily';
import QuizScreenFruits from '../components/QuizFolder/QuizScreenFruits';
import QuizScreenWords  from '../components/QuizFolder/QuizScreenWords';
import QuizScreenNumbers from '../components/QuizFolder/QuizScreenNumbers';
import LoginScreen from '../Screens/LoginScreen';
import RegisterScreen from '../Screens/RegisterScreen';
import WelcomeScreen from '../Screens/WelcomeScreen';
import Basics from '../components/Basics';
import Family from '../components/Family';
import ResultsScreenAnimals from '../components/QuizFolder/ResultsScreenAnimals';
import ResultsScreenFruits from '../components/QuizFolder/ResultsScreenFruits';
import ResultsScreenColors from '../components/QuizFolder/ResultsScreenColors';
import ResultsScreenFamily from '../components/QuizFolder/ResultsScreenFamily';
import ResultsScreenWords from '../components/QuizFolder/ResultsScreenWords';
import ResultsScreenNumbers from '../components/QuizFolder/ResultsScreenNumbers';
import Words from '../components/Words';
import ImageCarouselPage from '../components/Slider';


const Stack = createNativeStackNavigator()


export default function AppNavigator() {
 
  return (

    <NavigationContainer style={styles.View}>
    <Stack.Navigator>
  <Stack.Screen options={{ headerShown: false }} name="welcome" component={WelcomeScreen}/>
  <Stack.Screen options={{ headerShown: false }} name="Home" component={Home} />
  <Stack.Screen options={{ headerShown: false }} name="Basics" component={Basics} />
  <Stack.Screen options={{ headerShown: false }} name="Login" component={LoginScreen} />
  <Stack.Screen options={{ headerShown: false }} name="Register" component={RegisterScreen} />
  <Stack.Screen options={{ headerShown: false }} name="Alphabet" component={Alphabet} />
  <Stack.Screen options={{ headerShown: false }} name="Numbers" component={Numbers} />
  <Stack.Screen options={{ headerShown: false }} name="Fruits" component={Fruits} />
  <Stack.Screen options={{ headerShown: false }} name="Colors" component={Colors} />
  <Stack.Screen options={{ headerShown: false }} name="Animals" component={Animals} />
  <Stack.Screen name="Quiz" component={QuizScreen} options={{ headerShown: false }} />
  <Stack.Screen name="QuizColors" component={QuizScreenColors } options={{ headerShown: false }} />
  <Stack.Screen name="QuizAnimals" component={QuizScreenAnimals} options={{ headerShown: false }} />
  <Stack.Screen name="QuizFamily" component={QuizScreenFamily } options={{ headerShown: false }} />
  <Stack.Screen name="QuizFruits" component={QuizScreenFruits } options={{ headerShown: false }} />
  <Stack.Screen name="QuizWords" component={QuizScreenWords  } options={{ headerShown: false }} />
  <Stack.Screen name="QuizNumbers" component={QuizScreenNumbers} options={{ headerShown: false }} />
  <Stack.Screen name="Family" component={Family} options={{ headerShown: false }} />
  <Stack.Screen name="Words" component={Words} options={{ headerShown: false }} />
  <Stack.Screen name="Results" component={ResultsScreen} options={{ headerShown: false }} />
  <Stack.Screen name="ResultsAnimals" component={ResultsScreenAnimals} options={{ headerShown: false }} />
  <Stack.Screen name="ResultsFruits" component={ResultsScreenFruits} options={{ headerShown: false }} />
  <Stack.Screen name="ResultsColors" component={ResultsScreenColors} options={{ headerShown: false }} />
  <Stack.Screen name="ResultsFamily" component={ResultsScreenFamily} options={{ headerShown: false }} />
  <Stack.Screen name="ResultsWords" component={ResultsScreenWords} options={{ headerShown: false }} />
  <Stack.Screen name="ResultsNumbers" component={ResultsScreenNumbers} options={{ headerShown: false }} />
  <Stack.Screen name="culture" component={ImageCarouselPage} options={{ headerShown: false }} />
  
    </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  View: {
    backgroundColor: '#73030F',
  },
});
