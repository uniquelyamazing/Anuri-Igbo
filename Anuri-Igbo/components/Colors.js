import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Button from './ButtonHost';
import BLACK from '../assets/sounds/BLACK.mp3';
import BLUE from '../assets/sounds/BLUE.mp3';
import GREEN from '../assets/sounds/GREEN.mp3';
import PINK from '../assets/sounds/PINK.mp3';
import PURPLE from '../assets/sounds/PURPLE.mp3';
import RED from '../assets/sounds/RED.mp3';
import YELLOW from '../assets/sounds/YELLOW.mp3';
import WHITE from '../assets/sounds/WHITE.mp3';

const Colors = () => {
    const customTextStyles = {
      color: 'white',
      fontSize: 25,
      fontWeight: 'bold',
      marginTop:13
    };
    const customTextStylesS = {
      color: 'black',
      fontSize: 25,
      fontWeight: 'bold',
      marginTop:13
    };
    const  customButtonStyle = {
      width:'100%',
      height:72,
      backgroundColor:'#f4d3ab'
    }
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
      <Text style={{fontSize:50, fontWeight:'bold'}}>Name Of Colors </Text>
      <Text style={{fontSize:20, fontWeight:'bold', color:'#ffa449'}}>In Igbo</Text>
    </View>
      <View style={styles.Alphabet}>
      <View style={styles.onerow}>
          <Button buttonColor="black"  soundFile={BLACK}  text="BLACK" textStyle={customTextStyles} Button={customButtonStyle}  />
          <Button buttonColor="blue" soundFile={BLUE}   text="BLUE" textStyle={customTextStyles} Button={customButtonStyle} />
          <Button buttonColor="green" soundFile={GREEN}  text="GREEN" textStyle={customTextStyles} Button={customButtonStyle} />
          <Button buttonColor="pink" soundFile={PINK}    text="PINK" textStyle={customTextStyles} Button={customButtonStyle} />
          <Button buttonColor="purple" soundFile={PURPLE}   text="PURPLE" textStyle={customTextStyles} Button={customButtonStyle} />
          <Button buttonColor="red" soundFile={RED} text="RED" textStyle={customTextStyles} Button={customButtonStyle} />
          <Button buttonColor="yellow" soundFile={YELLOW} text="YELLOW" textStyle={customTextStyles} Button={customButtonStyle} />
          <Button buttonColor="white" soundFile={WHITE} text="WHITE" textStyle={customTextStylesS} Button={customButtonStyle} />
          </View>
        </View>
        <TouchableOpacity style={{alignSelf:'center', alignItems:'center',marginBottom:15, justifyContent:'center',
      width:250, height:50, backgroundColor:'#f4ead4', borderRadius:50}}><Text style={{fontSize:18, fontWeight:'bold'}}>Take A Test</Text></TouchableOpacity>
      </ScrollView>
      )}
      export default Colors


