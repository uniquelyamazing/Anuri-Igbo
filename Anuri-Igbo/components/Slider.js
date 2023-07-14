import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import ImageCarousel from './ImageCarousel';

const ImageCarouselPage = () => {
  const images = [
    { image: require('../assets/image.jpg'), text: 'Image 2' },
    { image: require('../assets/image1.jpg'), text: 'Image 3' },
    { image: require('../assets/image2.jpg'), text: 'Image 3' },
    { image: require('../assets/image3.jpg'), text: 'Image 3' },
    { image: require('../assets/image4.jpg'), text: 'Image 3' },
    { image: require('../assets/image5.jpg'), text: 'Image 3' },
    { image: require('../assets/image6.jpg'), text: 'Image 3' },
    { image: require('../assets/image7.jpg'), text: 'Image 3' },
    { image: require('../assets/image8.jpg'), text: 'Image 3' },
    { image: require('../assets/image9.jpg'), text: 'Image 3' },
    { image: require('../assets/image10.jpg'), text: 'Image 3' },
    { image: require('../assets/image11.jpg'), text: 'Image 3' },
    { image: require('../assets/image12.jpg'), text: 'Image 3' },
    { image: require('../assets/image13.jpg'), text: 'Image 3' },
    { image: require('../assets/image14.jpg'), text: 'Image 3' },
    { image: require('../assets/image15.jpg'), text: 'Image 3' },
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
