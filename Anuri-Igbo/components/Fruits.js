import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Modal, StyleSheet, ImageBackground,  } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Audio } from 'expo-av';
import Icon from 'react-native-vector-icons/FontAwesome';
import alph from '../assets/alph.jpg'
export default function Fruits({navigation}) {
  const [sounds, setSounds] = useState([
    {name2: 'Ube oyibo',   name: 'Avocado   ',  source: require('../assets/sounds/Avocado.mp3') },
    {name2: 'Ose Oji',   name: 'BitterKola',  source: require('../assets/sounds/BitterKola.mp3') },
    {name2: 'Ukwa',   name: 'BreadFruit', source: require('../assets/sounds/BreadFruit.mp3') },
    {name2: 'Okpoko',   name: 'coconut',  source: require('../assets/sounds/coconut.mp3') },
    {name2: 'Oka/Agbado',   name: 'Corn',  source: require('../assets/sounds/Corn.mp3') },
    {name2: 'Akwa Ose',   name: 'GardenEgg',  source: require('../assets/sounds/GardenEgg.mp3') },
    {name2: 'Akara/Okpa',   name: 'Groundnut',  source: require('../assets/sounds/Groundnut.mp3') },
    {name2: 'Gova',   name: 'Guava', source: require('../assets/sounds/Guava.mp3') },
    {name2: 'Udara',   name: 'JackFruit', source: require('../assets/sounds/JackFruit.mp3') },
    {name2: 'Oji',   name: 'Kolanut', source: require('../assets/sounds/Kolanut.mp3') },
    {name2: 'Mangoro',   name: 'Mango ',  source: require('../assets/sounds/Mango.mp3') },
    {name2: 'Ọdemụ',   name: 'Orange ',  source: require('../assets/sounds/Orange.mp3') },
    {name2: 'Mkpụrụkpụ',   name: 'PawPaw ',  source: require('../assets/sounds/PawPaw.mp3') },
    {name2: 'Mpịnụ ọma',   name: 'Pineapple ',  source: require('../assets/sounds/Pineapple.mp3') },
    {name2: 'Aki Awusa',   name: 'TigerNut',  source: require('../assets/sounds/TigerNut.mp3') },
    {name2: 'Ọgba ocha',   name: 'WaterMelon', source: require('../assets/sounds/WaterMelon.mp3') },
    {name2: 'Ebelebe',   name: 'Lime ', source: require('../assets/sounds/Lime.mp3') },
    {name2: 'Awarị opuebe/Anara',   name: 'Soursop',  source: require('../assets/sounds/Soursop.mp3') },
   
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
      <Text style={styles.nowPlayingText}>Now Learning Fruits</Text>
    <TouchableOpacity style={styles.nowPlayingIcon} onPress={() => navigation.navigate('Alphabet')}>
    <Icon name="ellipsis-v" size={24} color="white" />
      </TouchableOpacity>
     
      
     </View>
     <ImageBackground source={alph} stlye={{ resizeMode:'cover'}}>
  <View source={alph} style={styles.alph}>
 
      <Text style={{ fontSize:50, fontWeight:800,color:'white' }}>
       {sounds[currentSoundIndex].name}
      </Text>
      
      </View>
      </ImageBackground>
      <Text style={{ fontSize:30, fontWeight:800,color:'white', marginTop:10 }}>
       {sounds[currentSoundIndex].name2}
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


