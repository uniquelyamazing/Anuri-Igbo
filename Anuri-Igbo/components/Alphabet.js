import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Modal, StyleSheet, ImageBackground,  } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Audio } from 'expo-av';
import Icon from 'react-native-vector-icons/FontAwesome';
import alph from '../assets/alph.jpg'
export default function AlphabetsData({navigation}) {
  const [sounds, setSounds] = useState([
    { name: 'A',  source: require('../assets/sounds/A.mp3') },
    { name: 'B',  source: require('../assets/sounds/B.mp3') },
    { name: 'CH', source: require('../assets/sounds/CH.mp3') },
    { name: 'D',  source: require('../assets/sounds/D.mp3') },
    { name: 'E',  source: require('../assets/sounds/E.mp3') },
    { name: 'F',  source: require('../assets/sounds/F.mp3') },
    { name: 'G',  source: require('../assets/sounds/G.mp3') },
    { name: 'GB', source: require('../assets/sounds/GB.mp3') },
    { name: 'GH', source: require('../assets/sounds/GH.mp3') },
    { name: 'GW', source: require('../assets/sounds/GW.mp3') },
    { name: 'H',  source: require('../assets/sounds/H.mp3') },
    { name: 'I',  source: require('../assets/sounds/I.mp3') },
    { name: 'Ị',  source: require('../assets/sounds/Ị.mp3') },
    { name: 'J',  source: require('../assets/sounds/J.mp3') },
    { name: 'K',  source: require('../assets/sounds/K.mp3') },
    { name: 'KP', source: require('../assets/sounds/KP.mp3') },
    { name: 'KW', source: require('../assets/sounds/KW.mp3') },
    { name: 'L',  source: require('../assets/sounds/L.mp3') },
    { name: 'M',  source: require('../assets/sounds/M.mp3') },
    { name: 'N',  source: require('../assets/sounds/N.mp3') },
    { name: 'Ñ',  source: require('../assets/sounds/Ñ.mp3') },
    { name: 'NW', source: require('../assets/sounds/NW.mp3') },
    { name: 'NY', source: require('../assets/sounds/NY.mp3') },
    { name: 'O',  source: require('../assets/sounds/O.mp3') },
    { name: 'Ọ',  source: require('../assets/sounds/Ọ.mp3') },
    { name: 'P',  source: require('../assets/sounds/P.mp3') },
    { name: 'R',  source: require('../assets/sounds/R.mp3') },
    { name: 'S',  source: require('../assets/sounds/S.mp3') },
    { name: 'SH', source: require('../assets/sounds/SH.mp3') },
    { name: 'T',  source: require('../assets/sounds/T.mp3') },
    { name: 'U',  source: require('../assets/sounds/U.mp3') },
    { name: 'Ụ',  source: require('../assets/sounds/Ụ.mp3') },
    { name: 'V',  source: require('../assets/sounds/V.mp3') },
    { name: 'W',  source: require('../assets/sounds/W.mp3') },
    { name: 'Y',  source: require('../assets/sounds/Y.mp3') },
    { name: 'Z',  source: require('../assets/sounds/Z.mp3') },
  ]);
  const [currentSoundIndex, setCurrentSoundIndex] = useState(0);
  const [sound, setSound] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showCompletionModal, setShowCompletionModal] = useState(false);
  const [savedProgress, setSavedProgress] = useState(null);

  useEffect(() => {
    loadProgress();
  }, []);

  useEffect(() => {
    saveProgress();
  }, [currentSoundIndex]);

  async function saveProgress() {
    try {
      await AsyncStorage.setItem('progress', JSON.stringify(currentSoundIndex));
      console.log('Progress saved');
    } catch (error) {
      console.log('Error saving progress:', error);
    }
  }

  async function loadProgress() {
    try {
      const savedProgress = await AsyncStorage.getItem('progress');
      if (savedProgress !== null) {
        setCurrentSoundIndex(parseInt(savedProgress));
        setSavedProgress(parseInt(savedProgress));
        console.log('Progress loaded');
      }
    } catch (error) {
      console.log('Error loading progress:', error);
    }
  }

  async function playSound(index) {
    if (sound) {
      await sound.unloadAsync();
    }
    const { sound: newSound } = await Audio.Sound.createAsync(sounds[index].source);
    setSound(newSound);
    await newSound.playAsync();
    setIsPlaying(true);
  }

  async function pauseSound() {
    if (sound) {
      await sound.pauseAsync();
      setIsPlaying(false);
    }
  }

  function nextSound() {
    if (currentSoundIndex < sounds.length - 1) {
      pauseSound(); // Pause the current sound
      setCurrentSoundIndex(currentSoundIndex + 1);
      playSound(currentSoundIndex + 1); 
    } else {
      // All sounds played
      setShowCompletionModal(true);
      pauseSound()
    }
  }
  

  function previousSound() {
    if (currentSoundIndex > 0) {
      setCurrentSoundIndex(currentSoundIndex - 1);
    }
  }

  function handleContinue() {
    // Handle continue action
    console.log('Continue to next page or lesson');
    setShowCompletionModal(false);
  }

  function handleRetakeLesson() {
    // Handle retake lesson action
    console.log('Retake the lesson');
    setCurrentSoundIndex(0);
    setShowCompletionModal(false);
  }

 
  return (
    <View style={{ flex: 1,  alignItems: 'center' , backgroundColor:'black'}}>
    <View style={styles.nowplayingContainer}>
    <TouchableOpacity style={styles.nowPlayingIcon} onPress={() => navigation.navigate('Basics')}>
      <Icon name='chevron-left' size={15} color='white'/>
      </TouchableOpacity>
      <Text style={styles.nowPlayingText}>Now Learning Alphabets</Text>
    <TouchableOpacity style={styles.nowPlayingIcon} onPress={() => navigation.navigate('Alphabet')}>
    <Icon name="ellipsis-v" size={24} color="white" />
      </TouchableOpacity>
     
      
     </View>
     <ImageBackground source={alph} stlye={{ resizeMode:'cover'}}>
  <View source={alph} style={styles.alph}>
 
      <Text style={{ fontSize:100, fontWeight:800,color:'white' }}>
       {sounds[currentSoundIndex].name}
      </Text>
      
      </View>
      </ImageBackground>
      <Text style={{ fontSize:30, fontWeight:800,color:'white', marginTop:10 }}>
       {sounds[currentSoundIndex].name}
      </Text>
      <Text style={{ marginTop: 10, color:'white' }}>
      <Text style={{fontSize:20}}>Progress Number : </Text>{currentSoundIndex + 1}/{sounds.length}
      </Text>
      <View style={{ width: '80%', borderRadius:10, height: 10, backgroundColor: '#ccc', marginTop: 40 }}>
    <View style={{ width: `${(currentSoundIndex / sounds.length) * 100}%`, height: '100%',borderRadius:10, backgroundColor: 'green' }} />
  </View>
  <View style={styles.playButton}>
  <TouchableOpacity style={styles.prev} onPress={previousSound}>
  <Icon name="backward" size={24} color="black" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.play} onPress={isPlaying ? pauseSound : () => playSound(currentSoundIndex)}>
  <Text>{isPlaying ? (<Icon name="pause" size={50} color="black" />): (<Icon name="play" size={50} color="black" />)}</Text>
</TouchableOpacity>
      <TouchableOpacity style={styles.next}onPress={nextSound}>
      <Icon name="forward" size={24} color="black" />
      </TouchableOpacity>
      </View>
      <Modal
        visible={showCompletionModal}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setShowCompletionModal(false)}
      >
      <View style={styles.modalContainer}>
      <View style={styles.modalContent}>
        <Text style={styles.congratulationsText}>🎉🎉 Congratulations! 🎊🎊</Text>
        <Text style={styles.progressText}>
        Total Progress: {savedProgress !== null ? savedProgress + 1 : 0} / {sounds.length}
      </Text>
      
        <View style={styles.progressBarContainer}>
          <View style={[styles.progressBar, { width: `${(savedProgress / sounds.length) * 100}%` }]} />
        </View>
        <TouchableOpacity style={styles.button} onPress={handleContinue}>
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleRetakeLesson}>
          <Text style={styles.buttonText}>Retake Lesson</Text>
        </TouchableOpacity>
      </View>
    </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  nowplayingContainer:{
    width:'100%', 
    flexDirection:'row',
     padding:20,
     justifyContent:'space-between',
    alignItems:'center'
  },
  nowPlayingIcon:{width:30, 
    height:30, 
    borderRadius:10, 
    justifyContent:'center'
    ,
  alignItems:'center', },
  nowPlayingText:{
    textAlign:'center',
    color:'white',
     fontSize:20, 
     fontWeight:800, 
  },
  alph:{
    width:250,
    height:300,
    borderWidth:1,
    borderColor:'white',
    borderRadius:10,
    justifyContent:'center',
    alignItems:'center',
    marginTop:20
  },
  playButton:{
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center',
      width:'80%',
      height:60,
      marginTop:40
  },
  play:{
  width:70,
  height:70,
  borderRadius:100,
  backgroundColor:'white',
  justifyContent:'center',
  alignItems:'center',
  },
  next:{
    width:40,
    height:40,
    backgroundColor:'white',
    borderRadius:50,
    justifyContent:'center',
    alignItems:'center'
  },
  
  prev:{
    width:40,
    height:40,
    backgroundColor:'white',
    borderRadius:50,
    justifyContent:'center',
    alignItems:'center'
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    width:'100%'
    
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent:'center',
    width:'85%',
    height:'60%'
  },
  congratulationsText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  progressText: {
    fontSize: 18,
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    marginTop:10
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  progressBarContainer: {
    width: '80%',
    height: 10,
    backgroundColor: 'yellow',
    marginTop: 20,
    borderRadius:10
  },
  progressBar: {
    height: '100%',
    backgroundColor: 'green',
    borderRadius:10
  },
});


