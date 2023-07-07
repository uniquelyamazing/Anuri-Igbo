import React, { useState } from 'react';
import { ImageBackground, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { View } from 'react-native'
import welcome from '../assets/welcome.jpg'
import Icon from 'react-native-vector-icons/FontAwesome';

const WelcomeScreen = ({navigation}) => {
   

  return (
   
      <ImageBackground style={{flex:1, padding:20, }} source={welcome}>
      <View>
         <Text style={{fontSize:35, fontWeight:800, marginTop:20}}>AnuriIgbo</Text>
      </View>
      <View style={styles.Box2}>
      <Text style={{fontSize:50, fontWeight:800}}>Learn Igbo Easy</Text>
       <Text style={{fontSize:20}} >Our Unique Technic Will Turn The Learning Process Into An Incredible Adventure</Text>
      </View>
      <View style={{marginTop:30}}>
      <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.button}>
      <Icon name='chevron-right' size={20} color='white'/>
      </TouchableOpacity>
      </View>
     
      </ImageBackground>
    
  )
}
const styles = StyleSheet.create({
     Box2:{
        width:'60%',
        marginTop:300
    },
    button:{
        width:70,
        height:70,
        borderRadius:100,
        backgroundColor:'black',
        alignSelf:'flex-end',
        justifyContent:'center',
        alignItems:'center'
    }
})
export default WelcomeScreen
