import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Modal, StyleSheet, ImageBackground,  } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Audio } from 'expo-av';
import Icon from 'react-native-vector-icons/FontAwesome';
import alph from '../assets/alph.jpg'
export const  handleRetakeLessons = () => {
  // Handle retake lesson action
  console.log('Retake the lesson');
  setCurrentSoundIndex(0);
  setShowCompletionModal(false);
}
export default function Words({navigation}) {
  const [sounds, setSounds] = useState([
    {   name: 'animals',  source: require('../assets/sounds/animals.mp3') },
 {name: 'bag',  source: require('../assets/sounds/bag.mp3') },
 {name: 'bedsheet',  source: require('../assets/sounds/bedsheet.mp3') },
 {name: 'bicycle',  source: require('../assets/sounds/bicycle.mp3') },
 {name: 'broom',  source: require('../assets/sounds/broom.mp3') },
 {name: 'chair',  source: require('../assets/sounds/chair.mp3') },
 {name: 'cloth',  source: require('../assets/sounds/cloth.mp3') },
 {name: 'cup',  source: require('../assets/sounds/cup.mp3') },
 {name: 'FAMILY',  source: require('../assets/sounds/FAMILY.mp3') },
 {name: 'follow me',  source: require('../assets/sounds/followme.mp3') },
 {name: 'Gods child',  source: require('../assets/sounds/Godschild.mp3') },
 {name: 'good night',  source: require('../assets/sounds/goodnight.mp3') },
 {name: 'hat',  source: require('../assets/sounds/hat.mp3') },
 {name: 'have patience',  source: require('../assets/sounds/havepatience.mp3') },
 {name: 'how are you',  source: require('../assets/sounds/howareyou.mp3') },
 {name: 'how is your family',  source: require('../assets/sounds/howisyourfamily.mp3') },
 {name: 'Hi  ',  source: require('../assets/sounds/hy.mp3') },
 {name: 'it is good',  source: require('../assets/sounds/itisgood.mp3') },
 {name: 'it is bad',  source: require('../assets/sounds/itisbad.mp3') },
 {name: 'leave the way',  source: require('../assets/sounds/leavetheway.mp3') },
 {name: 'open the door',  source: require('../assets/sounds/openthedoor.mp3') },
 {name: 'our house',  source: require('../assets/sounds/ourhouse.mp3') },
 {name: 'our church',  source: require('../assets/sounds/ourchurch.mp3') },
 {name: 'pot',  source: require('../assets/sounds/pot.mp3') },
 {name: 'scarf',  source: require('../assets/sounds/scarf.mp3') },
 {name: 'shoe',  source: require('../assets/sounds/shoe.mp3') },
 {name: 'soap',  source: require('../assets/sounds/soap.mp3') },
 {name: 'sponge',  source: require('../assets/sounds/sponge.mp3') },
 {name: 'spoon',  source: require('../assets/sounds/spoon.mp3') },
 {name: 'table',  source: require('../assets/sounds/table.mp3') },
 {name: 'takeiteasy',  source: require('../assets/sounds/takeiteasy.mp3') },
 {name: 'television',  source: require('../assets/sounds/television.mp3') },
 {name: 'thank you',  source: require('../assets/sounds/thankyou.mp3') },
 {name: 'welcome',  source: require('../assets/sounds/welcome.mp3') },
 {name: 'women',  source: require('../assets/sounds/women.mp3') },
    
   
  ]);
  const [currentSoundIndex, setCurrentSoundIndex] = useState(0);
  const [sound, setSound] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showCompletionModal, setShowCompletionModal] = useState(false);
  const [savedProgress, setSavedProgress] = useState(null);

  useEffect(() => {
    loadProgress();
    const backHandler = BackHandler.addEventListener('hardwareBackPress', handleBackPress);

    return () => {
      backHandler.remove();
    };
  }, []);
  const handleBackPress = () => {
    return true; // Return false to allow the default back button behavior
  } 
  const back = () => {
    navigation.navigate('Basics')
    pauseSound()
  }
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
    navigation.navigate('QuizWords')
    console.log('Continue to next page or lesson');
    setShowCompletionModal(false);
  }

  function handleRetakeLesson() {
    // Handle retake lesson action
    console.log('Retake the lesson');
    setCurrentSoundIndex(0);
    setShowCompletionModal(false);
  }
  const [refreshKey, setRefreshKey] = useState(0);
  const handleRfresh = ()  => {
    setRefreshKey(refreshKey + 1);
    handleToggleDropdown(false)
    handleRetakeLesson()
  }
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const handleToggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  
  return (
    <View style={{ flex: 1,  alignItems: 'center' , backgroundColor:'black'}} key={refreshKey}>
    <View style={styles.nowplayingContainer}>
    <TouchableOpacity style={styles.nowPlayingIcon} onPress={() => navigation.navigate('Basics')}>
      <Icon name='chevron-left' size={15} color='white'/>
      </TouchableOpacity>
      <Text style={styles.nowPlayingText}>Now Learning Words</Text>
      <TouchableOpacity style={styles.nowPlayingIcon} onPress={() => handleToggleDropdown(true)}>
      <Icon name="ellipsis-v" size={24} color="white" />
        </TouchableOpacity>
        {isDropdownOpen && (
          <TouchableOpacity  onPress={handleRfresh} style={{width:50, height:39, justifyContent:'center',alignItems:'center', backgroundColor:'black'}}>
          <Text style={{color:'white'}}>Refresh</Text>
          </TouchableOpacity>
        )}
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
          <Text style={styles.buttonText}>Take Quiz</Text>
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


