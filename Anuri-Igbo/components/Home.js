import React, {useState, useEffect} from 'react';
import { View, StyleSheet, Text, ImageBackground, ScrollView, TouchableOpacity, Image } from 'react-native';
import { auth } from '../firebaseConfig';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { firestore } from '../firebaseConfig';
import profile from '../assets/profile.png'
import audioBack from '../assets/audioBack.jpg'
import Icon from 'react-native-vector-icons/FontAwesome';
export default function Home({navigation}) {

  const [username, setUsername] = useState('');

  useEffect(() => {
    const fetchUsername = async () => {
      try {
        const q = query(collection(firestore, 'users'), where('userId', '==', auth.currentUser.uid));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          setUsername(doc.data().username);
        });
      } catch (error) {
        console.log('Error fetching username:', error);
      }
    };
  
    fetchUsername();
  }, []);
  

  return (
  
      <ImageBackground source={audioBack} style={styles.container}>
        <View  style={styles.Box1}>
        <View style={{flexDirection:'row', justifyContent:'space-between',alignItems:'center', width:'100%', marginTop:25}}>
        <View style={{width:40, height:40, backgroundColor:'black', borderRadius:10, justifyContent:'center',  alignItems:'center'}}>
           <Image source={profile}style={{width:20, height:20,}} />
        </View>
        <TouchableOpacity style={{width:40, height:40, borderRadius:10, justifyContent:'center', alignItems:'center',
       backgroundColor:'white'}} onPress={() => navigation.navigate('Basics')}>
        <Icon name='chevron-right' size={20} color='black'/></TouchableOpacity>
           </View>
            <Text style={{color:'black', fontSize:40,marginTop:20 }}>Welcome {username || 'Guest'}</Text>
           
           <Text style={{color:'black', fontSize:37,fontWeight:800, }}>Ready To Learn Igbo Language?</Text>
        </View>
        <TouchableOpacity style={styles.Box2} onPress={() => navigation.navigate('Basics')}>
        <Text style={{fontSize:30, fontWeight:800, color:'white'}}>Lessons</Text>
        <Text style={{fontSize:13, color:'white', marginTop:7}}>✅    Alphabets</Text>
        <Text style={{fontSize:13, color:'white', marginTop:7}}>✅    Number Numeric</Text>
        <Text style={{fontSize:13, color:'white', marginTop:7}}>✅    Animals Name</Text>
        <Text style={{fontSize:13, color:'white', marginTop:7}}>✅    Types Of Food</Text>
        <Text style={{fontSize:13, color:'white', marginTop:7}}>✅    Name Of Colors</Text>
        <Text style={{fontSize:13, color:'white', marginTop:7}}>✅    Family Members</Text>
        <Text style={{fontSize:13, color:'white', marginTop:7}}>✅    Short Sentences</Text>
        <Text style={{fontSize:13, color:'white', marginTop:7}}>✅    Igbo Culture</Text>
        <TouchableOpacity style={{width:40, height:40, borderRadius:10, justifyContent:'center', alignItems:'center', position:'absolute',
      top:140, right:20, backgroundColor:'white'}} onPress={() => navigation.navigate('Basics')}>
        <Icon name='chevron-right' size={20} color='black'/></TouchableOpacity>
        </TouchableOpacity>
       
        </ImageBackground>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'center',
    justifyContent:'space-between',
   
   
  },
  Box1:{
        width:'100%',
        height:230,
        borderRadius:10,
        resizeMode:'cover',
       
       borderRadius:10,
    borderWidth:1,
    borderColor:'white',
    paddingLeft:30,
    paddingRight:30
  },
  Box2:{
    width:'98%',
    height:300,
    marginTop:20,
    transform: [{ rotate: '3deg' }] ,
    backgroundColor:'black',
    borderRadius:10,
    borderWidth:1,
    borderColor:'white',
    padding:30

  },
  Box3:{
    width:'98%',
    height:200,
    marginTop:20,
    transform: [{ rotate: '-3deg' }] ,
    backgroundColor:'white',
    borderRadius:10,
    borderWidth:1,
    borderColor:'white',
    padding:30

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
