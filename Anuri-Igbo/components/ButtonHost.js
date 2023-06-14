import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import { Audio } from 'expo-av';


export default function ButtonHost({ soundFile, text, buttonColor, textStyle, textStyles, Button, text2, buttonn, pauseButton}) {
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
  
  return (
    <View style={{ backgroundColor:'white', alignItems:'center', margin:5, borderRadius:5, padding:3}}>
   
    <TouchableOpacity style={[styles.button, Button, buttonn, {backgroundColor:buttonColor}]} onPress={playAndPause}>
     
          <Text style={[styles.buttonText, textStyle]}>{text}</Text>
          <Text style={[styles.buttonText, textStyles]}>{text2}</Text>
         
    </TouchableOpacity>
    <Text style={styles.buttonText}>{playingStatus}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
   
    borderRadius: 5,
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
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    color:'#73030F',
    marginTop:5,
    marginBottom:5
  },
});
