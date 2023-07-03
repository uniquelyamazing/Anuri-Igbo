import React, { useState, useRef, useEffect } from 'react';
import { View, Text, Animated, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';
import { Audio } from 'expo-av';
import { Ionicons } from '@expo/vector-icons';
import { AlphabetsData } from './Alphabet';
import { Dimensions } from 'react-native';

const { width: screenWidth } = Dimensions.get('window');
const Slider = ()  => {
  const slideAnimation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Animate the slide transitions
    Animated.timing(slideAnimation, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, []);

  const alphabetRefs = useRef({}); // Ref to store the sound objects for each alphabet
  const [playingStatus, setPlayingStatus] = useState({}); // State to track the playing status of each alphabet

  useEffect(() => {
    return () => {
      // Clean up the sounds when the component is unmounted
      Object.values(alphabetRefs.current).forEach((sound) => {
        if (sound) {
          sound.unloadAsync();
        }
      });
    };
  }, []);

  const playRecording = async (alphabet) => {
    if (!alphabetRefs.current[alphabet]) {
      const { sound } = await Audio.Sound.createAsync(
        alphabet.soundFile,
        {
          shouldPlay: true,
          isLooping: true,
        },
        updateScreenForSoundStatus
      );
      alphabetRefs.current[alphabet] = sound;
    }

    const sound = alphabetRefs.current[alphabet];
    await sound.playAsync();
    setPlayingStatus((prevStatus) => ({
      ...prevStatus,
      [alphabet]: 'playing',
    }));
  };

  const pauseRecording = async (alphabet) => {
    if (alphabetRefs.current[alphabet]) {
      const sound = alphabetRefs.current[alphabet];
      await sound.pauseAsync();
      setPlayingStatus((prevStatus) => ({
        ...prevStatus,
        [alphabet]: 'paused',
      }));
    }
  };

  const updateScreenForSoundStatus = (status, alphabet) => {
    if (status.isPlaying && playingStatus[alphabet] !== 'playing') {
      setPlayingStatus((prevStatus) => ({
        ...prevStatus,
        [alphabet]: 'playing',
      }));
    } else if (!status.isPlaying && playingStatus[alphabet] === 'playing') {
      setPlayingStatus((prevStatus) => ({
        ...prevStatus,
        [alphabet]: 'paused',
      }));
    }
  };

  const playAndPause = (alphabet) => {
    if (playingStatus[alphabet] === 'playing') {
      pauseRecording(alphabet);
    } else {
      playRecording(alphabet);
    }
  };

  const handleButtonClick = (alphabet) => {
    playAndPause(alphabet);
    setIsIconVisible(!isIconVisible);
  };
  const [isIconVisible, setIsIconVisible] = useState(false);

  

  const Press = (soundFile) => {
    playAndPause(soundFile);
    handleButtonClick();
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <View
        style={{
          width: '60%',
          height: '4%',
          backgroundColor: 'black',
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'center',
          borderRadius: 50,
          marginTop: 40,
        }}
      >
        <Text style={{ fontSize: 21, fontWeight: '800', color: 'white' }}>Alphabets</Text>
      </View>
      <Swiper
        style={styles.wrapper}
        loop={false}
        showsPagination={false}
        onIndexChanged={(index) => {
          // Reset the slide animation when the index changes
          slideAnimation.setValue(0);
        }}
      >
        {AlphabetsData.map((alphabet, index) => (
          <Animated.View
            key={index}
            style={[
              styles.slide,
              {
                width: '100%',
                transform: [
                  {
                    translateX: slideAnimation.interpolate({
                      inputRange: [0, 1],
                      outputRange: [0, -screenWidth / 100],
                    }),
                  },
                ],
              },
            ]}
          >
            <View style={styles.container}  key={index}>
              <View style={{ width: '100%', height: 160, backgroundColor: 'black', borderRadius: 100, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 70, color: 'white', fontWeight: 800 }}>{alphabet.letter}</Text>
              </View>
              <TouchableOpacity   key={index} style={{ width: 100, height: 100, borderRadius: 100, backgroundColor: 'black' }}  onPress={() => handleButtonClick(alphabet)}>
                {isIconVisible ? (
                  <Ionicons name="volume-high" size={15} style={styles.buttonText} />
                ) : (
                  <Ionicons name="volume-off" size={15} style={styles.buttonText} />
                )}
              </TouchableOpacity>
            </View>
          </Animated.View>
        ))}
      </Swiper>
    </View>
  );
};

const styles = {
  wrapper: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  slide: {
    // Style each slide/container
  },
  container: {
    width: '100%',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    textAlign: 'center',
    color: '#73030F',
    marginTop: 5,
    marginBottom: 5,
  },
};

export default Slider;
