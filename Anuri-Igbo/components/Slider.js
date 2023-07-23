import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import ImageCarousel from './ImageCarousel';

const ImageCarouselPage = () => {
  const images = [
    { image: require('../assets/image.jpg'), text:  'Igbo culture clothing and traditions' },
    { image: require('../assets/image1.jpg'), text: 'Igbo native food' },
    { image: require('../assets/image2.jpg'), text: 'Igbo culture clothing and traditions' },
    { image: require('../assets/image3.jpg'), text: 'Igbo culture clothing and traditions' },
    { image: require('../assets/image4.jpg'), text: 'Igbo native food' },
    { image: require('../assets/image5.jpg'), text: 'Igbo culture clothing and traditions' },
    { image: require('../assets/image6.jpg'), text: 'Igbo culture clothing and traditions' },
    { image: require('../assets/image7.jpg'), text: 'Igbo native food' },
    { image: require('../assets/image9.jpg'), text: 'Igbo culture clothing and traditions' },
    { image: require('../assets/image10.jpg'), text: 'Igbo culture clothing and traditions' },
    { image: require('../assets/image11.jpg'), text: 'Igbo native food' },
    { image: require('../assets/image12.jpg'), text: 'Igbo native food' },
    { image: require('../assets/image13.jpg'), text: 'Igbo native food' },
    { image: require('../assets/image14.jpg'), text: 'Igbo native food' },
    { image: require('../assets/image15.jpg'), text: 'Igbo native food' },
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
