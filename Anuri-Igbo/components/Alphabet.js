import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Button from './ButtonHost';
import A from '../assets/sounds/A.mp3';
import B from '../assets/sounds/B.mp3';
import CH from '../assets/sounds/CH.mp3';
import D from '../assets/sounds/D.mp3';
import E from '../assets/sounds/E.mp3';
import F from '../assets/sounds/F.mp3';
import G from '../assets/sounds/G.mp3';
import GB from '../assets/sounds/GB.mp3';
import GH from '../assets/sounds/GH.mp3';
import GW from '../assets/sounds/GW.mp3';
import H from '../assets/sounds/H.mp3';
import I from '../assets/sounds/I.mp3';
import Ị from '../assets/sounds/Ị.mp3';
import J from '../assets/sounds/J.mp3';
import K from '../assets/sounds/K.mp3';
import KP from '../assets/sounds/KP.mp3';
import KW from '../assets/sounds/KW.mp3';
import L from '../assets/sounds/L.mp3';
import M from '../assets/sounds/M.mp3';
import N from '../assets/sounds/N.mp3';
import Ñ from '../assets/sounds/Ñ.mp3';
import NW from '../assets/sounds/NW.mp3';
import NY from '../assets/sounds/NY.mp3';
import O from '../assets/sounds/O.mp3';
import Ọ from '../assets/sounds/Ọ.mp3';
import P from '../assets/sounds/P.mp3';
import R from '../assets/sounds/R.mp3';
import S from '../assets/sounds/S.mp3';
import SH from '../assets/sounds/SH.mp3';
import T from '../assets/sounds/T.mp3';
import U from '../assets/sounds/U.mp3';
import Ụ from '../assets/sounds/Ụ.mp3';
import V from '../assets/sounds/V.mp3';
import W from '../assets/sounds/W.mp3';
import Y from '../assets/sounds/Y.mp3';
import Z from '../assets/sounds/Z.mp3';

const Alphabet = ({navigation}) => {
  const customTextStyles = {
    color: '#ffa449',
    fontSize: 25,
    fontWeight: 'bold',
    marginTop:13
  };
  const  customButtonStyles = {
    width:50,
    height:50,
    backgroundColor:'#f4d3ab',
    
  }
  const styles = StyleSheet.create({
    AlphabetView: {
      backgroundColor: '#73030F',
    },
    Alphabet: {
      padding: 15,
    },
    onerow: {
      flexDirection: 'row',
      flexWrap:'wrap',
      justifyContent: 'center',
    },
  });

  return (
    <ScrollView style={styles.AlphabetView}>
    <View style={{width:'100%',padding:10, height:200, backgroundColor:'white', borderRadius:10, justifyContent:'center', alignItems:'center'}}>
      <Text style={{fontSize:50, fontWeight:'bold'}}>ALPHABETS</Text>
      <Text style={{fontSize:20, fontWeight:'bold', color:'#ffa449'}}>In Igbo</Text>
      <Text style={{fontSize:15, fontWeight:'bold', color:'#73030F', textAlign:'center',marginTop:20}}>Generally In
       English Language We Have Twenty Six '26' Letters But in Igbo Language We Have Thirty Six Letters : </Text>
    </View>
      <View style={styles.Alphabet}>
        <View style={styles.onerow}>
          <Button  Button={customButtonStyles} soundFile={A} text="A " textStyle={customTextStyles} buttonColor="#f4d3ab" />
          <Button  Button={customButtonStyles} soundFile={B} text="B " textStyle={customTextStyles} buttonColor="#f4d3ab" />
          <Button  Button={customButtonStyles} soundFile={CH} text="CH" textStyle={customTextStyles} buttonColor="#f4d3ab" />
          <Button  Button={customButtonStyles} soundFile={D} text="D " textStyle={customTextStyles} buttonColor="#f4d3ab" />
          <Button  Button={customButtonStyles} soundFile={E} text="E " textStyle={customTextStyles} buttonColor="#f4d3ab" />
          <Button  Button={customButtonStyles} soundFile={F} text="F " textStyle={customTextStyles} buttonColor="#f4d3ab" />
          <Button  Button={customButtonStyles} soundFile={G} text="G " textStyle={customTextStyles} buttonColor="#f4d3ab" />
          <Button  Button={customButtonStyles} soundFile={GB} text="GB" textStyle={customTextStyles} buttonColor="#f4d3ab" />
          <Button  Button={customButtonStyles} soundFile={GH} text="GH" textStyle={customTextStyles} buttonColor="#f4d3ab" />
          <Button  Button={customButtonStyles} soundFile={GW} text="GW" textStyle={customTextStyles} buttonColor="#f4d3ab" />
          <Button  Button={customButtonStyles} soundFile={H} text="H " textStyle={customTextStyles} buttonColor="#f4d3ab" />
          <Button  Button={customButtonStyles} soundFile={I} text="I " textStyle={customTextStyles} buttonColor="#f4d3ab" />
          <Button  Button={customButtonStyles} soundFile={Ị} text="Ị " textStyle={customTextStyles} buttonColor="#f4d3ab" />
          <Button  Button={customButtonStyles} soundFile={J} text="J " textStyle={customTextStyles} buttonColor="#f4d3ab" />
          <Button  Button={customButtonStyles} soundFile={K} text="K " textStyle={customTextStyles} buttonColor="#f4d3ab" />
          <Button  Button={customButtonStyles} soundFile={KP} text="KP" textStyle={customTextStyles} buttonColor="#f4d3ab" />
          <Button  Button={customButtonStyles} soundFile={KW} text="KW" textStyle={customTextStyles} buttonColor="#f4d3ab" />
          <Button  Button={customButtonStyles} soundFile={L} text="L " textStyle={customTextStyles} buttonColor="#f4d3ab" />
          <Button  Button={customButtonStyles} soundFile={M} text="M " textStyle={customTextStyles} buttonColor="#f4d3ab" />
          <Button  Button={customButtonStyles} soundFile={N} text="N " textStyle={customTextStyles} buttonColor="#f4d3ab" />
          <Button  Button={customButtonStyles} soundFile={Ñ} text="Ñ " textStyle={customTextStyles} buttonColor="#f4d3ab" />
          <Button  Button={customButtonStyles} soundFile={NW} text="NW" textStyle={customTextStyles} buttonColor="#f4d3ab" />
          <Button  Button={customButtonStyles} soundFile={NY} text="NY" textStyle={customTextStyles} buttonColor="#f4d3ab" />
          <Button  Button={customButtonStyles} soundFile={O} text="O " textStyle={customTextStyles} buttonColor="#f4d3ab" />
          <Button  Button={customButtonStyles} soundFile={Ọ} text="Ọ " textStyle={customTextStyles} buttonColor="#f4d3ab" />
          <Button  Button={customButtonStyles} soundFile={P} text="P " textStyle={customTextStyles} buttonColor="#f4d3ab" />
          <Button  Button={customButtonStyles} soundFile={R} text="R " textStyle={customTextStyles} buttonColor="#f4d3ab" />
          <Button  Button={customButtonStyles} soundFile={S} text="S " textStyle={customTextStyles} buttonColor="#f4d3ab" />
          <Button  Button={customButtonStyles} soundFile={SH} text="SH" textStyle={customTextStyles} buttonColor="#f4d3ab" />
          <Button  Button={customButtonStyles} soundFile={T} text="T " textStyle={customTextStyles} buttonColor="#f4d3ab" />
          <Button  Button={customButtonStyles} soundFile={U} text="U " textStyle={customTextStyles} buttonColor="#f4d3ab" />
          <Button  Button={customButtonStyles} soundFile={Ụ} text="Ụ " textStyle={customTextStyles} buttonColor="#f4d3ab" />
          <Button  Button={customButtonStyles} soundFile={V} text="V " textStyle={customTextStyles} buttonColor="#f4d3ab" />
          <Button  Button={customButtonStyles} soundFile={W} text="W " textStyle={customTextStyles} buttonColor="#f4d3ab" />
          <Button  Button={customButtonStyles} soundFile={Y} text="Y " textStyle={customTextStyles} buttonColor="#f4d3ab" />
          <Button  Button={customButtonStyles} soundFile={Z} text="Z " textStyle={customTextStyles} buttonColor="#f4d3ab" />
        </View>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate("HomeScreen")} style={{alignSelf:'center', alignItems:'center', justifyContent:'center', marginBottom:15,
      width:250, height:50, backgroundColor:'#f4ead4', borderRadius:50}}><Text style={{fontSize:18, fontWeight:'bold'}}>Take A Test</Text></TouchableOpacity>
    </ScrollView>
  );
};

export default Alphabet;
