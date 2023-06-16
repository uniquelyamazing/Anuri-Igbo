import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Button from './ButtonHost';
import ANTELOPE from '../assets/sounds/ANTELOPE.mp3';
import CAT from '../assets/sounds/CAT.mp3';
import COW from '../assets/sounds/COW.mp3';
import DOG from '../assets/sounds/DOG.mp3';
import DONKEY from '../assets/sounds/DONKEY.mp3';
import ELEPHANT from '../assets/sounds/ELEPHANT.mp3';
import FROG from '../assets/sounds/FROG.mp3';
import GORILLA from '../assets/sounds/GORILLA.mp3';
import HORSE from '../assets/sounds/HORSE.mp3';
import LEOPARD from '../assets/sounds/LEOPARD.mp3';
import LION from '../assets/sounds/LION.mp3';
import LIZARD from '../assets/sounds/LIZARD.mp3';
import PIG from '../assets/sounds/PIG.mp3';
import RAT from '../assets/sounds/RAT.mp3';
import SCORPION from '../assets/sounds/SCORPION.mp3';
import SNAKE from '../assets/sounds/SNAKE.mp3';
import SQUIRREL from '../assets/sounds/SQUIRREL.mp3';
import TIGER from '../assets/sounds/TIGER.mp3';
import TOAD from '../assets/sounds/TOAD.mp3';

const Animals = ({navigation}) => {
    const customTextStyles = {
      color: '#ffa449',
      fontSize: 29,
      fontWeight: 'bold',
      marginTop:13
    };
    const  customButtonStyle = {
      width:'100%',
      height:72,
      backgroundColor:'#f4d3ab'
    }
    const customTextStyless = {
      color: '#73030F',
      fontSize: 20,
      fontWeight: 'bold',
      marginTop:13
    };
    const styles = StyleSheet.create({
      AlphabetView: {
        backgroundColor: '#73030F',
      },
      Alphabet: {
        padding: 15,
      },
      onerow: {
        justifyContent: 'space-between',
      },
     
    });
  
    return (
      <ScrollView style={styles.AlphabetView}>
       <View style={{width:'100%',padding:10, height:200, backgroundColor:'white', borderRadius:10, justifyContent:'center', alignItems:'center'}}>
      <Text style={{fontSize:50, fontWeight:'bold'}}>Names Of Animals</Text>
      <Text style={{fontSize:20, fontWeight:'bold', color:'#ffa449'}}>In Igbo</Text>
      
    </View>
      <View style={styles.Alphabet}>
      <View style={styles.onerow}>
          <Button buttonColor="#f4d3ab" soundFile={ANTELOPE} textStyles={customTextStyless} text="ANTELOPE" textStyle={customTextStyles} Button={customButtonStyle} />
          <Button buttonColor="#f4d3ab" soundFile={CAT} textStyles={customTextStyless}      text="CAT" textStyle={customTextStyles} Button={customButtonStyle} />
          <Button buttonColor="#f4d3ab" soundFile={COW} textStyles={customTextStyless}      text="COW" textStyle={customTextStyles} Button={customButtonStyle} />
          <Button buttonColor="#f4d3ab" soundFile={DOG} textStyles={customTextStyless}      text="DOG" textStyle={customTextStyles} Button={customButtonStyle} />
          <Button buttonColor="#f4d3ab" soundFile={DONKEY} textStyles={customTextStyless}      text="DONKEY" textStyle={customTextStyles} Button={customButtonStyle} />
          <Button buttonColor="#f4d3ab" soundFile={ELEPHANT} textStyles={customTextStyless}   text="ELEPHANT" textStyle={customTextStyles} Button={customButtonStyle} />
          <Button buttonColor="#f4d3ab" soundFile={FROG} textStyles={customTextStyless} text="FROG" textStyle={customTextStyles} Button={customButtonStyle} />
          <Button buttonColor="#f4d3ab" soundFile={GORILLA} textStyles={customTextStyless}     text="GORILLA" textStyle={customTextStyles} Button={customButtonStyle} />
          <Button buttonColor="#f4d3ab" soundFile={HORSE} textStyles={customTextStyless}  text="HORSE" textStyle={customTextStyles} Button={customButtonStyle} />
          <Button buttonColor="#f4d3ab" soundFile={LEOPARD} textStyles={customTextStyless}    text="LEOPARD" textStyle={customTextStyles} Button={customButtonStyle} />
          <Button buttonColor="#f4d3ab" soundFile={LION} textStyles={customTextStyless}  text="LION" textStyle={customTextStyles} Button={customButtonStyle} />
          <Button buttonColor="#f4d3ab" soundFile={LIZARD} textStyles={customTextStyless}     text="LIZARD" textStyle={customTextStyles} Button={customButtonStyle} />
          <Button buttonColor="#f4d3ab" soundFile={PIG} textStyles={customTextStyless}   text="PIG" textStyle={customTextStyles} Button={customButtonStyle} />
          <Button buttonColor="#f4d3ab" soundFile={RAT} textStyles={customTextStyless}      text="RAT" textStyle={customTextStyles} Button={customButtonStyle} />
          <Button buttonColor="#f4d3ab" soundFile={SCORPION} textStyles={customTextStyless}      text="SCORPION" textStyle={customTextStyles} Button={customButtonStyle} />
          <Button buttonColor="#f4d3ab" soundFile={SNAKE} textStyles={customTextStyless} text="SNAKE" textStyle={customTextStyles} Button={customButtonStyle} />
          <Button buttonColor="#f4d3ab" soundFile={SQUIRREL} textStyles={customTextStyless}    text="SQUIRREL" textStyle={customTextStyles} Button={customButtonStyle} />
          <Button buttonColor="#f4d3ab" soundFile={TIGER} textStyles={customTextStyless} text="TIGER" textStyle={customTextStyles} Button={customButtonStyle} />
          <Button buttonColor="#f4d3ab" soundFile={TOAD} textStyles={customTextStyless}    text="TOAD" textStyle={customTextStyles} Button={customButtonStyle} />
          </View>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("HomeScreen")} style={{alignSelf:'center', alignItems:'center', justifyContent:'center', marginBottom:15,
      width:250, height:50, backgroundColor:'#f4ead4', borderRadius:50}}><Text style={{fontSize:18, fontWeight:'bold'}}>Take A Test</Text></TouchableOpacity>
      </ScrollView>
      )}
      export default Animals


