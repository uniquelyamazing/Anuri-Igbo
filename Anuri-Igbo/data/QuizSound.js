import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import { Audio } from 'expo-av';

import { Ionicons } from '@expo/vector-icons';
export default function QuizSound({ soundFile, text, texxt, buttonColor,buttonQuiz, textStyle, textStyles, Button, text2, buttonn, pauseButton}) {
  const soundRef = React.useRef(null);
  const [playingStatus, setPlayingStatus] = useState('Play');
  useEffect(() => {
    return () => {
      // Clean up the sound when the component is unmounted
      if (soundRef.current) {
        soundRef.current.unloadAsync();
      }
    };
  }, []);

  const playRecording = async () => {
    const { sound } = await Audio.Sound.createAsync(
      soundFile,
      {
        shouldPlay: true,
        isLooping: true,
      },
      updateScreenForSoundStatus
    );
    soundRef.current = sound;
    setPlayingStatus('playing');
  };

  const updateScreenForSoundStatus = (status) => {
    if (status.isPlaying && playingStatus !== 'playing') {
      setPlayingStatus('playing');
    } else if (!status.isPlaying && playingStatus === 'playing') {
      setPlayingStatus('paused');
    }
  };

  const pauseAndPlayRecording = async () => {
    if (soundRef.current) {
      if (playingStatus === 'playing') {
        console.log('pausing...');
        await soundRef.current.pauseAsync();
        console.log('paused!');
        setPlayingStatus('paused');
      } else {
        console.log('playing...');
        await soundRef.current.playAsync();
        console.log('playing!');
        setPlayingStatus('playing');
      }
    }
  };
// File A

  const playAndPause = () => {
    switch (playingStatus) {
      case 'Play':
       
        playRecording();
        
        break;
      case 'paused':
      case 'playing':
        pauseAndPlayRecording();
        break;
    }
  };
  const [isIconVisible, setIsIconVisible] = useState(false);

  const handleButtonClick = () => {
    setIsIconVisible(!isIconVisible);
  };
  const Press = () => {
    playAndPause()
    handleButtonClick()
  }
  return (
    
    <TouchableOpacity style={styles.button} onPress={Press}>
     
     {isIconVisible ? (
        <Ionicons name="volume-high" size={15} color="black" />
      ) : (
        <Ionicons name="volume-off" size={15} color="black" />
      )}
         
    </TouchableOpacity>
   
  );
}

const styles = StyleSheet.create({
  button: {
    width:50,
    height:50,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f4d3ab',
    shadowColor: 'black',
    shadowOpacity: 1,
    shadowOffset: { width: 50, height: 50 },
    shadowRadius: 8,
    elevation: 30, 
  },
  
  buttonText: {
   
    fontSize: 16,
    textAlign: 'center',
    color:'#73030F',
    marginTop:5,
    marginBottom:5
  },
});
