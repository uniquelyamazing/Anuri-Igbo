import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, ActivityIndicator, Image } from 'react-native';
import { Audio } from 'expo-av';
import { Ionicons } from '@expo/vector-icons';
import audioWave from '../assets/audio.jpg'

export default function ButtonHost({ soundFile, text, texxt, buttonColor,buttonQuiz, textStyle, textStyles, Button, text2, buttonn, pauseButton}) {
  const [sound, setSound] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  useEffect(() => {
    return () => {
      // Clean up the sound when the component is unmounted
      if (sound) {
        sound.unloadAsync();
      }
    };
  }, []);

  const loadSound = async () => {
    if (sound) {
      await sound.unloadAsync();
    }

    const { sound: newSound } = await Audio.Sound.createAsync(
      soundFile,
      { shouldPlay: true, isLooping: false },
      updateScreenForSoundStatus
    );

    setSound(newSound);
    setIsPlaying(true);
  };

  const unloadSound = async () => {
    if (sound) {
      await sound.stopAsync();
      await sound.unloadAsync();
      setSound(null);
      setIsPlaying(false);
    }
  };

  const updateScreenForSoundStatus = (status) => {
    if (status.isLoaded && status.isPlaying && !isPlaying) {
      setIsPlaying(true);
    } else if (!status.isPlaying && isPlaying) {
      setIsPlaying(false);
    }
  };

  const handleButtonClicks= async () => {
    if (isPlaying) {
      await unloadSound();
    } else {
      await loadSound();
    }
  };
  const [isIconVisible, setIsIconVisible] = useState(false);

  const handleButtonClick = () => {
    setIsIconVisible(!isIconVisible);
  };
  const Press = () => {
    handleButtonClicks()
    handleButtonClick()
  }
  return (
    <View style={{ height:'90%', alignItems:'center', margin:5, borderRadius:5, padding:3, justifyContent:'space-between', }}>
    <View style={{ width: '100%', height: 370, backgroundColor: 'black', borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 200, color: 'white', fontWeight: 800 }}>{text}</Text>
              </View>
      <Image source={audioWave} style={{width:'80%', height:50, borderRadius:50}}/>
    <TouchableOpacity style={styles.button } onPress={Press}>
    {isIconVisible ? (
      <Ionicons name="pause" size={25} style={styles.buttonText} />
    ) : (
      <Ionicons name="play" size={25} style={styles.buttonText} />
    )}
    </TouchableOpacity>
    
         
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
     width:80,
     height:80,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    shadowColor: 'black',
    shadowOpacity: 1,
    shadowOffset: { width: 50, height: 50 },
    shadowRadius: 8,
    elevation: 30, 
  },
  
  buttonText: {
   
   
    textAlign: 'center',
    color:'white',
    marginTop:5,
    marginBottom:5
  },
});
