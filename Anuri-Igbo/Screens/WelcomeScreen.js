import React, { useState, useEffect } from 'react';
import { ImageBackground, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'; // Import AsyncStorage
import Icon from 'react-native-vector-icons/FontAwesome';
import welcome from '../assets/welcome.jpg'
const WelcomeScreen = ({ navigation }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    checkLoginState();
  }, []);

  const checkLoginState = async () => {
    try {
      const storedLoginState = await AsyncStorage.getItem('isLoggedIn');
      setIsLoggedIn(storedLoginState === 'true');
    } catch (error) {
      console.log('Failed to retrieve login state', error);
    }
  };

  return (
    <ImageBackground style={{ flex: 1, padding: 20 }} source={welcome}>
      <View>
        <Text style={{ fontSize: 35, fontWeight: '800', marginTop: 20 }}>AnuriIgbo</Text>
      </View>
      <View style={styles.Box2}>
        <Text style={{ fontSize: 50, fontWeight: '800' }}>Learn Igbo Easy</Text>
        <Text style={{ fontSize: 20 }}>Our Unique Technic Will Turn The Learning Process Into An Incredible Adventure</Text>
      </View>
      <View style={{ marginTop: 30 }}>
        <TouchableOpacity
          onPress={() => navigation.navigate(isLoggedIn ? 'Home' : 'Login')}
          style={styles.button}
        >
          <Icon name='chevron-right' size={20} color='white' />
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  Box2: {
    width: '60%',
    marginTop: 300
  },
  button: {
    width: 70,
    height: 70,
    borderRadius: 100,
    backgroundColor: 'black',
    alignSelf: 'flex-end',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default WelcomeScreen;
