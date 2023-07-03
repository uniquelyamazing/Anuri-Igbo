import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Modal, StyleSheet } from 'react-native';
import { Audio } from 'expo-av';
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function App() {
  const [sounds, setSounds] = useState([
    { name: 'Sound 1', source: require('../assets/sounds/A.mp3') },
    { name: 'Sound 2', source: require('../assets/sounds/B.mp3') },
    { name: 'Sound 3', source: require('../assets/sounds/CH.mp3') },
    { name: 'Sound 4', source: require('../assets/sounds/D.mp3') },
  ]);
  const [currentSoundIndex, setCurrentSoundIndex] = useState(null);
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
      setCurrentSoundIndex(currentSoundIndex + 1);
    } else {
      // All sounds played
      setShowCompletionModal(true);
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

  useEffect(() => {
    if (currentSoundIndex !== null) {
      playSound(currentSoundIndex);
    }
  }, [currentSoundIndex]);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TouchableOpacity onPress={isPlaying ? pauseSound : playSound}>
        <Text>{isPlaying ? 'Pause Sound' : 'Play Sound'}</Text>
      </TouchableOpacity>
      <Text style={{ marginTop: 10 }}>
        Current Sound: {currentSoundIndex !== null ? sounds[currentSoundIndex].name : ''}
      </Text>
      <TouchableOpacity onPress={previousSound}>
        <Text>Previous Sound</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={nextSound}>
        <Text>Next Sound</Text>
      </TouchableOpacity>

      <Modal
        visible={showCompletionModal}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setShowCompletionModal(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.congratulationsText}>Congratulations!</Text>
            <Text style={styles.progressText}>
              Total Progress: {savedProgress !== null ? savedProgress + 1 : 0} / {sounds.length}
            </Text>
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
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
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
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});
