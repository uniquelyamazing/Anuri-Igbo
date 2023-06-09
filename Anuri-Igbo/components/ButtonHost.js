import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import { Audio } from 'expo-av';
import Ionicons from 'react-native-vector-icons/Ionicons';


export default function ButtonHost({ soundFile, text, textStyle, buttonColor }) {
  const [sound, setSound] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const playSound = async () => {
    try {
      console.log('Loading Sound');
      const { sound } = await Audio.Sound.createAsync(soundFile);
      setSound(sound);

      console.log('Playing Sound');
      setIsLoading(true);
      await sound.playAsync();
      
    } catch (error) {
      console.log('Error playing sound', error);
    } finally {
      console.log('Sound playback finished');
      
    }
  };

  useEffect(() => {
    return () => {
      if (sound) {
        console.log('Unloading Sound');
        sound.unloadAsync();
      }
    };
  }, [sound]);
  const end = () => {
    playSound()
    
   }
  return (
    
    
    <TouchableOpacity style={[styles.button, { backgroundColor: buttonColor }]} onPress={end}>
          <Text onLoadEnd={()=> setIsLoading(false)} style={[styles.buttonText, textStyle]}>{text}</Text>
         <Text style={styles.buttonS}><Ionicons name="volume-high" size={15} color="#ffa449"/ > 
</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 50,
    height: 50,
    borderRadius: 5,
    marginBottom: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonS: {
   backgroundColor:'#73030F',
    justifyContent: 'flex-end',
    alignItems: 'center',
    alignSelf: 'flex-end',
   padding:2
  },
  buttonContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
});