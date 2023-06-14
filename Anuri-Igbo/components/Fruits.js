import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Button from './ButtonHost';
import Avocado    from '../assets/sounds/Avocado.mp3';
import BitterKola from '../assets/sounds/BitterKola.mp3';
import BreadFruit from '../assets/sounds/BreadFruit.mp3';
import coconut    from '../assets/sounds/coconut.mp3';
import Corn       from '../assets/sounds/Corn.mp3';
import GardenEgg  from '../assets/sounds/GardenEgg.mp3';
import Groundnut  from '../assets/sounds/Groundnut.mp3';
import Guava      from '../assets/sounds/Guava.mp3';
import JackFruit  from '../assets/sounds/JackFruit.mp3';
import Kolanut    from '../assets/sounds/Kolanut.mp3';
import Mango      from '../assets/sounds/Mango.mp3';
import Orange     from '../assets/sounds/Orange.mp3';
import PawPaw     from '../assets/sounds/PawPaw.mp3';
import Pineapple  from '../assets/sounds/Pineapple.mp3';
import TigerNut   from '../assets/sounds/TigerNut.mp3';
import WaterMelon from '../assets/sounds/WaterMelon.mp3';
import Lime       from '../assets/sounds/Lime.mp3';
import Soursop   from '../assets/sounds/Soursop.mp3';
const Fruits = () => {
    const customTextStyles = {
      color: 'white',
      fontSize: 25,
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
      justifyContent: 'center',
      },
     
    });
  
    return (
      <ScrollView style={styles.AlphabetView}>
       <View style={{width:'100%',padding:10, height:200, backgroundColor:'white', borderRadius:10, justifyContent:'center', alignItems:'center'}}>
      <Text style={{fontSize:50, fontWeight:'bold'}}>Name Of Fruits</Text>
      <Text style={{fontSize:20, fontWeight:'bold', color:'#ffa449'}}>In Igbo</Text>
    </View>
      <View style={styles.Alphabet}>
      <View style={styles.onerow}>
          <Button buttonColor="#f4d3ab" soundFile={Avocado   } textStyles={customTextStyless} text2="'Yes I Want Avocado'" text="Avocado" textStyle={customTextStyles} Button={customButtonStyle} />
          <Button buttonColor="#f4d3ab" soundFile={BitterKola} textStyles={customTextStyless} text2="'Yes I Want Bitterkola'" text="BitterKola" textStyle={customTextStyles} Button={customButtonStyle} />
          <Button buttonColor="#f4d3ab" soundFile={BreadFruit} textStyles={customTextStyless} text2="'My Siblings Lobe BreadFruit'" text="BreadFruit" textStyle={customTextStyles} Button={customButtonStyle} />
          <Button buttonColor="#f4d3ab" soundFile={coconut   } textStyles={customTextStyless} text2="'I Want To Eat CocoNut'" text="coconut" textStyle={customTextStyles} Button={customButtonStyle} />
          <Button buttonColor="#f4d3ab" soundFile={Corn      } textStyles={customTextStyless} text2="'My Father Eat Corn'" text="Corn" textStyle={customTextStyles} Button={customButtonStyle} />
          <Button buttonColor="#f4d3ab" soundFile={GardenEgg } textStyles={customTextStyless} text2="'I Have GardenEgg'" text="GardenEgg" textStyle={customTextStyles} Button={customButtonStyle} />
          <Button buttonColor="#f4d3ab" soundFile={Groundnut } textStyles={customTextStyless} text2="'I Want To Eat GroundNut'" text="Groundnut" textStyle={customTextStyles} Button={customButtonStyle} />
          <Button buttonColor="#f4d3ab" soundFile={Guava     } textStyles={customTextStyless} text2="'This Is Guava'" text="Guava" textStyle={customTextStyles} Button={customButtonStyle} />
          <Button buttonColor="#f4d3ab" soundFile={JackFruit } textStyles={customTextStyless} text2="'JackFruit Is Too Expensive'" text="JackFruit" textStyle={customTextStyles} Button={customButtonStyle} />
          <Button buttonColor="#f4d3ab" soundFile={Kolanut   } textStyles={customTextStyless} text2="'This KolaNut Is Good'" text="Kolanut" textStyle={customTextStyles} Button={customButtonStyle} />
          <Button buttonColor="#f4d3ab" soundFile={Mango     } textStyles={customTextStyless} text2="'We Have Mango'" text="Mango" textStyle={customTextStyles} Button={customButtonStyle} />
          <Button buttonColor="#f4d3ab" soundFile={Orange    } textStyles={customTextStyless} text2="'I Have Two Oranges'" text="Orange" textStyle={customTextStyles} Button={customButtonStyle} />
          <Button buttonColor="#f4d3ab" soundFile={PawPaw    } textStyles={customTextStyless} text2="'I Have PawPaw'" text="PawPaw" textStyle={customTextStyles} Button={customButtonStyle} />
          <Button buttonColor="#f4d3ab" soundFile={Pineapple } textStyles={customTextStyless} text2="'Pineapple Is Sweet'" text="Pineapple" textStyle={customTextStyles} Button={customButtonStyle} />
          <Button buttonColor="#f4d3ab" soundFile={TigerNut  } textStyles={customTextStyless} text2="'I Have Some TigerNut'" text="TigerNut" textStyle={customTextStyles} Button={customButtonStyle} />
          <Button buttonColor="#f4d3ab" soundFile={WaterMelon} textStyles={customTextStyless} text2="'I Have Three WaterMelon'" text="WaterMelon" textStyle={customTextStyles} Button={customButtonStyle} />
          <Button buttonColor="#f4d3ab" soundFile={Lime      } textStyles={customTextStyless} text2="'Lime Is Bitter'" text="Lime" textStyle={customTextStyles} Button={customButtonStyle} />
          <Button buttonColor="#f4d3ab" soundFile={Soursop   } textStyles={customTextStyless} text2="'My Sibling Love Soursop'" text="Soursop" textStyle={customTextStyles} Button={customButtonStyle} />
        
          </View>
        </View>
        <TouchableOpacity style={{alignSelf:'center', alignItems:'center', justifyContent:'center', marginBottom:15,
      width:250, height:50, backgroundColor:'#f4ead4', borderRadius:50}}><Text style={{fontSize:18, fontWeight:'bold'}}>Take A Test</Text></TouchableOpacity>
      </ScrollView>
      )}
      export default Fruits





      