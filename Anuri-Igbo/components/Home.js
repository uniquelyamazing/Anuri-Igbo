import React from 'react';
import { View, StyleSheet, Text, ImageBackground, ScrollView, TouchableOpacity } from 'react-native';
import image from '../assets/background.jpg';
import Alphabet from '../components/Alphabet';
import { useNavigation } from '@react-navigation/native';

export default function Home({navigation}) {
 
 

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.welcome}>
          <ImageBackground
            source={image}
            style={{
              flex: 1,
              width: null,
              height: null,
              padding: 20,
            }}
          >
            <Text style={styles.text}>
              Welcome <Text style={styles.p}>Ayomide</Text>
            </Text>
          </ImageBackground>
        </View>
        <View style={styles.learnBox}>
          <View style={styles.level}>
            <Text style={styles.leveltext}>Basic Level</Text>
          </View>
          <View style={styles.boxBox}>
            <TouchableOpacity  onPress={() => navigation.navigate("Alphabet")}style={styles.box}>
              <Text>Alphabets</Text>
            </TouchableOpacity >
            <TouchableOpacity  style={styles.box}>
              <Text>Numbers</Text>
            </TouchableOpacity >
          </View>
          <View style={styles.boxBox}>
            <TouchableOpacity  style={styles.box}>
              <Text>Colors</Text>
            </TouchableOpacity >
            <TouchableOpacity  style={styles.box}>
              <Text>Animals</Text>
            </TouchableOpacity >
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'black',
  },
  welcome: {
    width: '100%',
    backgroundColor: 'white',
    height: 300,
  },
  text: {
    fontSize: 40,
    color: 'white',
    fontWeight: 'bold',
  },
  p: {
    fontSize: 25,
    color: '#73030F',
    fontWeight: 'bold',
  },
  learnBox: {
    width: '90%',
    backgroundColor: '#73030F',
    height: 400,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxBox: {
    flexDirection: 'row',
  },
  box: {
    width: 125,
    height: 130,
    backgroundColor: 'yellow',
    margin: 10,
    borderRadius: 10,
  },
  level: {
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffa449',
    borderRadius: 10,
  },
  leveltext: {
    fontSize: 20,
    color: 'white',
  },
});
