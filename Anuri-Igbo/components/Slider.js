import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import ImageCarousel from './ImageCarousel';

const ImageCarouselPage = () => {
  const images = [
    { image: require('../assets/sentences.jpg'), text: 'Image 2' },
    { image: require('../assets/sentences.jpg'), text: 'Image 3' },
    { image: require('../assets/sentences.jpg'), text: 'Image 3' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Igbo Culture</Text>
      <ImageCarousel images={images} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    textAlign:'center',
    fontSize: 24,
    fontWeight: 'bold',
    color:'white'
  },
});

export default ImageCarouselPage;
