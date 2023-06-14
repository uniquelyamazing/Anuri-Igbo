import React from 'react';
import { View, StyleSheet, Text, ImageBackground, ScrollView, TouchableOpacity, Image } from 'react-native';
import image from '../assets/background.jpg';
import fruit from '../assets/fruit.png'
import animal from '../assets/animal.png'
import alphabet from '../assets/alphabet.png'
import number from '../assets/number.png'
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
            <Text style={styles.textss}>
            "Ndewo <Text style={styles.p}>Ayomide</Text>
            "</Text>
          <Text style={{marginTop:70, color:'#ffa449', fontSize: 17,fontWeight: 'bold',}}>
             "Learning Igbo Language in an extraordinary way"
            </Text>
          </ImageBackground>
        </View>
        <View style={styles.learnBox}>
          <View style={styles.level}>
            <Text style={styles.leveltext}>Basic Level</Text>
          </View>
          <View style={styles.boxBox}>
            <TouchableOpacity  onPress={() => navigation.navigate("Alphabet")}style={styles.box}>
              <Text style={styles.texts}>Alphabets</Text>
              <Image source={alphabet} style={{width:150, height:50 , resizeMode:'contain'}}/>
            </TouchableOpacity >
            <TouchableOpacity   onPress={() => navigation.navigate("Numbers")} style={styles.box}>
              <Text style={styles.texts}>Numbers</Text>
              <Image source={number} style={{width:150, height:50 , resizeMode:'contain'}}/>
            </TouchableOpacity >
          </View>
          <View style={styles.boxBox}>
            <TouchableOpacity onPress={() => navigation.navigate("Colors")} style={styles.box}>
              <Text style={styles.texts}>Colors</Text>
              <View style={{flexDirection:'row'}}>
                <View style={{width:10, height:10, borderRadius:50, backgroundColor:'blue', margin:5 }}></View>
                <View style={{width:10, height:10, borderRadius:50, backgroundColor:'black', margin:5 }}></View>
                <View style={{width:10, height:10, borderRadius:50, backgroundColor:'red', margin:5 }}></View>
                <View style={{width:10, height:10, borderRadius:50, backgroundColor:'yellow', margin:5 }}></View>
              </View>
            </TouchableOpacity >
            <TouchableOpacity onPress={() => navigation.navigate("Animals")} style={styles.box}>
              <Text style={styles.texts}>Animals</Text>
              <Image source={animal} style={{width:150, height:50 , resizeMode:'contain'}}/>
            </TouchableOpacity >
          </View>
          <View style={styles.boxBox}>
            <TouchableOpacity onPress={() => navigation.navigate("Fruits")} style={styles.box}>
              <Text style={styles.texts}>Fruits</Text>
              <Image source={fruit} style={{width:150, height:50 , resizeMode:'contain'}}/>
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
    marginTop:30
  },
  textss: {
    fontSize: 40,
    color: 'white',
    fontWeight: 'bold',
    marginTop:10
  },
  texts: {
    fontSize: 25,
    color: '#73030F',
    fontWeight: 'bold',
   
  },
  p: {
    fontSize: 25,
    color: '#73030F',
    fontWeight: 'bold',
  },
  learnBox: {
    width: '100%',
    backgroundColor: '#f4ead4',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxBox: {
    flexDirection: 'row',
  },
  box: {
    width: 135,
    height: 110,
    backgroundColor: '#f4d3ab',
    margin: 10,
    borderRadius: 10,
    justifyContent:'center',
    alignItems:'center'
  },
  level: {
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffa449',
    borderRadius: 10,
    marginBottom:20,
    marginTop:30
  },
  leveltext: {
    fontSize: 20,
    color: 'white',
  },
});
