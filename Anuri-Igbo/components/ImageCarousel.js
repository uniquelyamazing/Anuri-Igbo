import React from 'react';
import { View, Image, StyleSheet, Dimensions, Text } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { LinearGradient } from 'expo-linear-gradient';
import Constants from 'expo-constants';

const { width } = Dimensions.get('window');

const ImageCarousel = ({ images }) => {
  const [activeSlide, setActiveSlide] = React.useState(0);

  const renderItem = ({ item }) => {
    return (
      <View style={styles.slide}>
        <Image source={item.image} style={styles.image} />
       
        <View style={styles.textContainer}>
          <Text style={styles.text}>{item.text}</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Carousel
        data={images}
        renderItem={renderItem}
        sliderWidth={width}
        itemWidth={width}
        onSnapToItem={(index) => setActiveSlide(index)}
        swipeEnabled={true}
      />
      <Pagination
        dotsLength={images.length}
        activeDotIndex={activeSlide}
        containerStyle={styles.paginationContainer}
        dotStyle={styles.dot}
        inactiveDotStyle={styles.inactiveDot}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    height:'80%',
   
  },
  slide: {
    width: '100%',
    height: '80%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'black'
  },
  image: {
    width: '90%',
    height: '100%',
    resizeMode: 'cover',
  },
  gradient: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 1,
    
  },
  textContainer: {
    alignSelf: 'center',
  marginTop:50
  },
  text: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  paginationContainer: {
    position: 'absolute',
    bottom: 16,
    alignSelf: 'center',
    paddingVertical: 8,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'white',
    marginHorizontal: 4,
  },
  inactiveDot: {
    backgroundColor: 'white',
  },
});

export default ImageCarousel;
