import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Modal, StyleSheet, ImageBackground, BackHandler,  } from 'react-native';
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
export default function Numbers ({navigation}){


  const [sounds, setSounds] = useState([
    { name: '1 ',  name2: 'otu',             source: require('../assets/sounds/1.mp3'   ) },
    { name: '2 ',  name2: 'abụọ',            source: require('../assets/sounds/2.mp3'   ) },
    { name: '3 ',  name2: 'atọ',             source: require('../assets/sounds/3.mp3'   ) },
    { name: '4 ',  name2: 'anọ',             source: require('../assets/sounds/4.mp3'   ) },
    { name: '5 ',  name2: 'ise',             source: require('../assets/sounds/5.mp3'   ) },
    { name: '6 ',  name2: 'isii',            source: require('../assets/sounds/6.mp3'   ) },
    { name: '7 ',  name2: 'asaa',            source: require('../assets/sounds/7.mp3'   ) },
    { name: '8 ',  name2: 'asatọ',           source: require('../assets/sounds/8.mp3'   ) },
    { name: '9 ',  name2: 'itoolu',          source: require('../assets/sounds/9.mp3'   ) },
    { name: '10',  name2: 'iri',             source: require('../assets/sounds/10.mp3' ) },
    { name: '11',  name2: 'iri na otu',         source: require('../assets/sounds/11.mp3' ) },
    { name: '12',  name2: 'iri na abụọ',        source: require('../assets/sounds/12.mp3' ) },
    { name: '13',  name2: 'iri na atọ',         source: require('../assets/sounds/13.mp3' ) },
    { name: '14',  name2: 'iri na anọ',         source: require('../assets/sounds/14.mp3' ) },
    { name: '15',  name2: 'iri na ise',         source: require('../assets/sounds/15.mp3' ) },
    { name: '16',  name2: 'iri na isii',        source: require('../assets/sounds/16.mp3' ) },
    { name: '17',  name2: 'iri na asaa',        source: require('../assets/sounds/17.mp3' ) },
    { name: '18',  name2: 'iri na asatọ',       source: require('../assets/sounds/18.mp3' ) },
    { name: '19',  name2: 'iri na itoolu',      source: require('../assets/sounds/19.mp3' ) },
    { name: '20',  name2: 'iri abụọ',                source: require('../assets/sounds/20.mp3' ) },
    { name: '21',  name2: 'iri abụọ na otu',         source: require('../assets/sounds/21.mp3' ) },
    { name: '22',  name2: 'iri abụọ na abụọ',        source: require('../assets/sounds/22.mp3' ) },
    { name: '23',  name2: 'iri abụọ na atọ',         source: require('../assets/sounds/23.mp3' ) },
    { name: '24',  name2: 'iri abụọ na anọ',         source: require('../assets/sounds/24.mp3' ) },
    { name: '25',  name2: 'iri abụọ na ise',         source: require('../assets/sounds/25.mp3' ) },
    { name: '26',  name2: 'iri abụọ na isii',        source: require('../assets/sounds/26.mp3' ) },
    { name: '27',  name2: 'iri abụọ na asaa',        source: require('../assets/sounds/27.mp3' ) },
    { name: '28',  name2: 'iri abụọ na asatọ',       source: require('../assets/sounds/28.mp3' ) },
    { name: '29',  name2: 'iri abụọ na itoolu',      source: require('../assets/sounds/29.mp3' ) },
    { name: '30',  name2: 'iri atọ',           source: require('../assets/sounds/30.mp3' ) },
    { name: '31',  name2: 'iri atọ na otu',    source: require('../assets/sounds/31.mp3' ) },
    { name: '32',  name2: 'iri atọ na abụọ',   source: require('../assets/sounds/32.mp3' ) },
    { name: '33',  name2: 'iri atọ na atọ',    source: require('../assets/sounds/33.mp3' ) },
    { name: '34',  name2: 'iri atọ na anọ',    source: require('../assets/sounds/34.mp3' ) },
    { name: '35',  name2: 'iri atọ na ise',    source: require('../assets/sounds/35.mp3' ) },
    { name: '36',  name2: 'iri atọ na isii',   source: require('../assets/sounds/36.mp3' ) },
    { name: '37',  name2: 'iri atọ na asaa',   source: require('../assets/sounds/37.mp3' ) },
    { name: '38',  name2: 'iri atọ na asatọ',  source: require('../assets/sounds/38.mp3' ) },
    { name: '39',  name2: 'iri atọ na itoolu', source: require('../assets/sounds/39.mp3' ) },
    { name: '40',  name2: 'iri anọ',            source: require('../assets/sounds/40.mp3' ) },
    { name: '41',  name2: 'iri anọ na otu',     source: require('../assets/sounds/41.mp3' ) },
    { name: '42',  name2: 'iri anọ na abụọ',    source: require('../assets/sounds/42.mp3' ) },
    { name: '43',  name2: 'iri anọ na atọ',     source: require('../assets/sounds/43.mp3' ) },
    { name: '44',  name2: 'iri anọ na anọ',     source: require('../assets/sounds/44.mp3' ) },
    { name: '45',  name2: 'iri anọ na ise',     source: require('../assets/sounds/45.mp3' ) },
    { name: '46',  name2: 'iri anọ na isii',    source: require('../assets/sounds/46.mp3' ) },
    { name: '47',  name2: 'iri anọ na asaa',    source: require('../assets/sounds/47.mp3' ) },
    { name: '48',  name2: 'iri anọ na asatọ',   source: require('../assets/sounds/48.mp3' ) },
    { name: '49',  name2: 'iri anọ na itoolu',  source: require('../assets/sounds/49.mp3' ) },
    { name: '50',  name2: 'iri ise',            source: require('../assets/sounds/50.mp3' ) },
    { name: '51',  name2: 'iri ise na otu',     source: require('../assets/sounds/51.mp3' ) },
    { name: '52',  name2: 'iri ise na abụọ',    source: require('../assets/sounds/52.mp3' ) },
    { name: '53',  name2: 'iri ise na atọ',     source: require('../assets/sounds/53.mp3' ) },
    { name: '54',  name2: 'iri ise na anọ',     source: require('../assets/sounds/54.mp3' ) },
    { name: '55',  name2: 'iri ise na ise',     source: require('../assets/sounds/55.mp3' ) },
    { name: '56',  name2: 'iri ise na isii',    source: require('../assets/sounds/56.mp3' ) },
    { name: '57',  name2: 'iri ise na asaa',    source: require('../assets/sounds/57.mp3' ) },
    { name: '58',  name2: 'iri ise na asatọ',   source: require('../assets/sounds/58.mp3' ) },
    { name: '59',  name2: 'iri ise na itoolu',  source: require('../assets/sounds/59.mp3' ) },
    { name: '60',  name2: 'iri isii',            source: require('../assets/sounds/60.mp3' ) },
    { name: '61',  name2: 'iri isii na otu',     source: require('../assets/sounds/61.mp3' ) },
    { name: '62',  name2: 'iri isii na abụọ',    source: require('../assets/sounds/62.mp3' ) },
    { name: '63',  name2: 'iri isii na atọ',     source: require('../assets/sounds/63.mp3' ) },
    { name: '64',  name2: 'iri isii na anọ',     source: require('../assets/sounds/64.mp3' ) },
    { name: '65',  name2: 'iri isii na ise',     source: require('../assets/sounds/65.mp3' ) },
    { name: '66',  name2: 'iri isii na isii',    source: require('../assets/sounds/66.mp3' ) },
    { name: '67',  name2: 'iri isii na asaa',    source: require('../assets/sounds/67.mp3' ) },
    { name: '68',  name2: 'iri isii na asatọ',   source: require('../assets/sounds/68.mp3' ) },
    { name: '69',  name2: 'iri isii na itoolu',  source: require('../assets/sounds/69.mp3' ) },
    { name: '70',  name2: 'iri asaa',           source: require('../assets/sounds/70.mp3' ) },
    { name: '71',  name2: 'iri asaa na otu',    source: require('../assets/sounds/71.mp3' ) },
    { name: '72',  name2: 'iri asaa na abụọ',   source: require('../assets/sounds/72.mp3' ) },
    { name: '73',  name2: 'iri asaa na atọ',    source: require('../assets/sounds/73.mp3' ) },
    { name: '74',  name2: 'iri asaa na anọ',    source: require('../assets/sounds/74.mp3' ) },
    { name: '75',  name2: 'i asaa na ise',      source: require('../assets/sounds/75.mp3' ) },
    { name: '76',  name2: 'iri asaa na isii',   source: require('../assets/sounds/76.mp3' ) },
    { name: '77',  name2: 'iri asaa na asaa',   source: require('../assets/sounds/77.mp3' ) },
    { name: '78',  name2: 'iri asaa na asatọ',  source: require('../assets/sounds/78.mp3' ) },
    { name: '79',  name2: 'iri asaa na itoolu', source: require('../assets/sounds/79.mp3' ) },
    { name: '80',  name2: 'iri asatọ',          source: require('../assets/sounds/80.mp3' ) },
    { name: '81',  name2: 'iri asatọ na otu',   source: require('../assets/sounds/81.mp3' ) },
    { name: '82',  name2: 'iri asatọ na abụọ',  source: require('../assets/sounds/82.mp3' ) },
    { name: '83',  name2: 'iri asatọ na atọ',   source: require('../assets/sounds/83.mp3' ) },
    { name: '84',  name2: 'iri asatọ na anọ',   source: require('../assets/sounds/84.mp3' ) },
    { name: '85',  name2: 'iri asatọ na ise',   source: require('../assets/sounds/85.mp3' ) },
    { name: '86',  name2: 'iri asatọ na isii',  source: require('../assets/sounds/86.mp3' ) },
    { name: '87',  name2: 'iri asatọ na asaa',  source: require('../assets/sounds/87.mp3' ) },
    { name: '88',  name2: 'iri asatọ na asatọ', source: require('../assets/sounds/88.mp3' ) },
    { name: '89',  name2: 'iri asatọ na itoolu', source: require('../assets/sounds/89.mp3' ) },
    { name: '90',  name2: 'itoolu nwa',         source: require('../assets/sounds/90.mp3' ) },
    { name: '91',  name2: 'itoolu nwa na otu',         source: require('../assets/sounds/91.mp3' ) },
    { name: '92',  name2: 'itoolu nwa na abụọ',         source: require('../assets/sounds/92.mp3' ) },
    { name: '93',  name2: 'itoolu nwa na atọ',         source: require('../assets/sounds/93.mp3' ) },
    { name: '94',  name2: 'itoolu nwa na anọ',         source: require('../assets/sounds/94.mp3' ) },
    { name: '95',  name2: 'itoolu nwa na ise',         source: require('../assets/sounds/95.mp3' ) },
    { name: '96',  name2: 'itoolu nwa na isii',         source: require('../assets/sounds/96.mp3' ) },
    { name: '97',  name2: 'itoolu nwa na asaa',         source: require('../assets/sounds/97.mp3' ) },
    { name: '98',  name2: 'itoolu nwa na asato',         source: require('../assets/sounds/98.mp3' ) },
    { name: '99',  name2: 'itoolu nwa na usato ',         source: require('../assets/sounds/99.mp3' ) },
    { name: '100',  name2: 'ọdịnihu ',         source: require('../assets/sounds/100.mp3' ) },
    { name: '200',     name2: 'abụọ na iri',           source: require('../assets/sounds/200.mp3') },
    { name: '300',     name2: 'atọ na iri',            source: require('../assets/sounds/300.mp3') },
    { name: '400',     name2: 'anọ na iri',            source: require('../assets/sounds/400.mp3') },
    { name: '500',     name2: 'ise na iri',            source: require('../assets/sounds/500.mp3') },
    { name: '600',     name2: 'isii na iri',           source: require('../assets/sounds/600.mp3') },
    { name: '700',     name2: 'asaa na iri',           source: require('../assets/sounds/700.mp3') },
    { name: '800',     name2: 'asatọ na iri',          source: require('../assets/sounds/800.mp3') },
    { name: '900',     name2: 'itoolu na iri',         source: require('../assets/sounds/900.mp3') },
    { name: '1000',    name2: 'otu nke naani',         source: require('../assets/sounds/1000.mp3') },
    { name: '1Million', name2: 'otu obere',            source: require('../assets/sounds/1Million.mp3') },
    { name: '1Billion', name2: 'otu abụọnje ',         source: require('../assets/sounds/1Billion.mp3') }
   
  ])
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
    navigation.navigate('QuizNumbers')
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
      <Text style={styles.nowPlayingText}>Now Learning Numbers</Text>
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
      <Text style={{ fontSize:100, fontWeight:800,color:'white' }}>
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





90 - 'itoolu nwa'
91 - 'itoolu nwa na otu'
92 - 'itoolu nwa na abụọ'
93 - 'itoolu nwa na atọ'
94 - 'itoolu nwa na anọ'
95 - 'itoolu nwa na ise'
96 - 'itoolu nwa na isii'
97 - 'itoolu nwa na asaa'
98 - 'itoolu nwa na asato'
99 - 'itoolu nwa na usato '