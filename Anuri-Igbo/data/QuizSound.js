import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, ActivityIndicator, Image } from 'react-native';
import { Audio } from 'expo-av';
import audiowave from '../assets/audio.jpg'
import { Ionicons } from '@expo/vector-icons';
export default function QuizSound({ soundFile}) {
  const soundRef = React.useRef(null);
  const [isIconVisible, setIsIconVisible]= useState(false)
  const [sound, setSound] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);


  useEffect(() => {
    return () => {
      if (sound) {
        sound.stopAsync();
      }
    };
  }, []);

  const playSound = async () => {
    if (sound) {
      sound.stopAsync();
    }

    const { sound: newSound } = await Audio.Sound.createAsync(soundFile);
    setSound(newSound);
    await newSound.playAsync();
    setIsPlaying(true);
    setIsIconVisible(true);
  };

  const pauseSound = async () => {
    if (sound) {
      await sound.pauseAsync();
      setIsPlaying(false);
      setIsIconVisible(false);
    }
  };

  return (
    
    <TouchableOpacity style={styles.button} onPress={isPlaying ? pauseSound : playSound} >
     
     {isIconVisible ? (
        <Ionicons name="pause" size={20} color="white" />
      ) : (
        <Ionicons name="play" size={20} color="white" />
      )}
         <Image source={audiowave} style={styles.image}/>
    </TouchableOpacity>
   
  );
}

const styles = StyleSheet.create({
  button: {
    width:330,
    height:50,
    borderRadius: 100,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection:'row',
    backgroundColor: 'black',
    shadowColor: 'black',
    shadowOpacity: 1,
    shadowOffset: { width: 50, height: 50 },
    shadowRadius: 8,
    elevation: 30, 
    padding:10
  },
  
  image: {
    width:290,
    height:30
  },
});
