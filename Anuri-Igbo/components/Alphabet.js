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

const Alphabet = () => {
  const customTextStyles = {
    color: 'white',
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
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
  });

  return (
    <ScrollView style={styles.AlphabetView}>
    <View style={{width:'100%',padding:10, height:200, backgroundColor:'white', borderRadius:10, justifyContent:'center', alignItems:'center'}}>
      <Text style={{fontSize:50, fontWeight:'bold'}}>ALPHABETS</Text>
      <Text style={{fontSize:20, fontWeight:'bold', color:'#ffa449'}}>In Igbo</Text>
      <Text style={{fontSize:15, fontWeight:'bold', color:'#73030F', textAlign:'center',marginTop:20}}>Generally In
       English Language We Have Twenty Six '26' Alphabets But in Igbo Language We Have Thurty Six Alphabets: </Text>
    </View>
      <View style={styles.Alphabet}>
        <View style={styles.onerow}>
          <Button soundFile={A} text="A " textStyle={customTextStyles} buttonColor="#f4d3ab" />
          <Button soundFile={B} text="B " textStyle={customTextStyles} buttonColor="#f4d3ab" />
          <Button soundFile={CH} text="CH" textStyle={customTextStyles} buttonColor="#f4d3ab" />
          <Button soundFile={D} text="D " textStyle={customTextStyles} buttonColor="#f4d3ab" />
          <Button soundFile={E} text="E " textStyle={customTextStyles} buttonColor="#f4d3ab" />
          <Button soundFile={F} text="F " textStyle={customTextStyles} buttonColor="#f4d3ab" />
        </View>
        <View style={styles.onerow}>
          <Button soundFile={G} text="G " textStyle={customTextStyles} buttonColor="#f4d3ab" />
          <Button soundFile={GB} text="GB" textStyle={customTextStyles} buttonColor="#f4d3ab" />
          <Button soundFile={GH} text="GH" textStyle={customTextStyles} buttonColor="#f4d3ab" />
          <Button soundFile={GW} text="GW" textStyle={customTextStyles} buttonColor="#f4d3ab" />
          <Button soundFile={H} text="H " textStyle={customTextStyles} buttonColor="#f4d3ab" />
          <Button soundFile={I} text="I " textStyle={customTextStyles} buttonColor="#f4d3ab" />
        </View>
        <View style={styles.onerow}>
          <Button soundFile={Ị} text="Ị " textStyle={customTextStyles} buttonColor="#f4d3ab" />
          <Button soundFile={J} text="J " textStyle={customTextStyles} buttonColor="#f4d3ab" />
          <Button soundFile={K} text="K " textStyle={customTextStyles} buttonColor="#f4d3ab" />
          <Button soundFile={KP} text="KP" textStyle={customTextStyles} buttonColor="#f4d3ab" />
          <Button soundFile={KW} text="KW" textStyle={customTextStyles} buttonColor="#f4d3ab" />
          <Button soundFile={L} text="L " textStyle={customTextStyles} buttonColor="#f4d3ab" />
        </View>
        <View style={styles.onerow}>
          <Button soundFile={M} text="M " textStyle={customTextStyles} buttonColor="#f4d3ab" />
          <Button soundFile={N} text="N " textStyle={customTextStyles} buttonColor="#f4d3ab" />
          <Button soundFile={Ñ} text="Ñ " textStyle={customTextStyles} buttonColor="#f4d3ab" />
          <Button soundFile={NW} text="NW" textStyle={customTextStyles} buttonColor="#f4d3ab" />
          <Button soundFile={NY} text="NY" textStyle={customTextStyles} buttonColor="#f4d3ab" />
          <Button soundFile={O} text="O " textStyle={customTextStyles} buttonColor="#f4d3ab" />
        </View>
        <View style={styles.onerow}>
          <Button soundFile={Ọ} text="Ọ " textStyle={customTextStyles} buttonColor="#f4d3ab" />
          <Button soundFile={P} text="P " textStyle={customTextStyles} buttonColor="#f4d3ab" />
          <Button soundFile={R} text="R " textStyle={customTextStyles} buttonColor="#f4d3ab" />
          <Button soundFile={S} text="S " textStyle={customTextStyles} buttonColor="#f4d3ab" />
          <Button soundFile={SH} text="SH" textStyle={customTextStyles} buttonColor="#f4d3ab" />
          <Button soundFile={T} text="T " textStyle={customTextStyles} buttonColor="#f4d3ab" />
        </View>
        <View style={styles.onerow}>
          <Button soundFile={U} text="U " textStyle={customTextStyles} buttonColor="#f4d3ab" />
          <Button soundFile={Ụ} text="Ụ " textStyle={customTextStyles} buttonColor="#f4d3ab" />
          <Button soundFile={V} text="V " textStyle={customTextStyles} buttonColor="#f4d3ab" />
          <Button soundFile={W} text="W " textStyle={customTextStyles} buttonColor="#f4d3ab" />
          <Button soundFile={Y} text="Y " textStyle={customTextStyles} buttonColor="#f4d3ab" />
          <Button soundFile={Z} text="Z " textStyle={customTextStyles} buttonColor="#f4d3ab" />
        </View>
      </View>
      <TouchableOpacity style={{alignSelf:'center', alignItems:'center', justifyContent:'center',
      width:250, height:50, backgroundColor:'#f4ead4', borderRadius:50}}><Text style={{fontSize:18, fontWeight:'bold'}}>Take A Test</Text></TouchableOpacity>
    </ScrollView>
  );
};

export default Alphabet;
