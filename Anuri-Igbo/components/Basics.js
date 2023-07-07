import React,{useState, useEffect} from 'react'
import { Image, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import login from '../assets/login.jpg'
import image from '../assets/background.jpg';
import fruit from '../assets/fruit.png'
import animal from '../assets/animal.png'
import alphabet from '../assets/alphabet.png'
import number from '../assets/number.png'
import Icon from 'react-native-vector-icons/FontAwesome';
import { auth } from '../firebaseConfig';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { firestore } from '../firebaseConfig';
export default function Basics ({navigation}) {



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
    <ImageBackground source={login} style={styles.container}>
      <View style={styles.Box}>
      <Text style={{color:'white', fontSize:40,marginTop:20 }}>Welcome {username}</Text>
   <Text style={{fontSize:30, color:'white', fontWeight:800}}>Choose your Lesson</Text>
      </View>
      <ScrollView style={styles.scrollableBox}>
         <View style={styles.lesson}>
         <View style={styles.BoxSmall}><Text style={{fontSize: 25, fontWeight:700, color:'black'}}>Alphabets</Text>
         <Image style={{width:160, height:50, alignSelf:'center'}} source={alphabet}/>
         <TouchableOpacity style={{width:30, height:30, alignSelf:'flex-end', borderRadius:10, justifyContent:'center', alignItems:'center', 
        backgroundColor:'gray'}} onPress={() => navigation.navigate('Alphabet')}>
          <Icon name='chevron-right' size={15} color='white'/></TouchableOpacity>
         </View>
         <View style={styles.BoxSmall}><Text style={{fontSize: 25, fontWeight:700, color:'black'}}>Numbers</Text>
         <Image style={{width:160, height:50, alignSelf:'center'}} source={number}/>
         <TouchableOpacity style={{width:30, height:30, alignSelf:'flex-end', borderRadius:10, justifyContent:'center', alignItems:'center', 
        backgroundColor:'gray'}} onPress={() => navigation.navigate('Numbers')}>
          <Icon name='chevron-right' size={15} color='white'/></TouchableOpacity>
         </View>
         <View style={styles.BoxSmall}><Text style={{fontSize: 25, fontWeight:700, color:'black'}}>Colors</Text>
        <View style={{flexDirection:'row', alignSelf:'center',width:70, height:50, justifyContent:'space-between', alignItems:'center'}}>
        <View style={{width:15, height:15, borderRadius:100, backgroundColor:'blue'}}></View><View style={{width:15, height:15, borderRadius:100, backgroundColor:'yellow'}}></View><View style={{width:15, height:15, borderRadius:100, backgroundColor:'red'}}></View>
        </View>
         <TouchableOpacity style={{width:30, height:30, alignSelf:'flex-end', borderRadius:10, justifyContent:'center', alignItems:'center', 
        backgroundColor:'gray'}} onPress={() => navigation.navigate('Colors')}>
          <Icon name='chevron-right' size={15} color='white'/></TouchableOpacity>
         </View>
         <View style={styles.BoxSmall}><Text style={{fontSize: 25, fontWeight:700, color:'black'}}>Animals</Text>
         <Image style={{width:160, height:50, alignSelf:'center'}} source={animal}/>
         <TouchableOpacity style={{width:30, height:30, alignSelf:'flex-end', borderRadius:10, justifyContent:'center', alignItems:'center', 
        backgroundColor:'gray'}} onPress={() => navigation.navigate('Animals')}>
          <Icon name='chevron-right' size={15} color='white'/></TouchableOpacity>
         </View>
         <View style={styles.BoxSmall}><Text style={{fontSize: 25, fontWeight:700, color:'black'}}>Fruits</Text>
         <Image style={{width:160, height:50, alignSelf:'center'}} source={fruit}/>
         <TouchableOpacity style={{width:30, height:30, alignSelf:'flex-end', borderRadius:10, justifyContent:'center', alignItems:'center', 
        backgroundColor:'gray'}} onPress={() => navigation.navigate('Fruits')}>
          <Icon name='chevron-right' size={15} color='white'/></TouchableOpacity>
         </View>
         </View>
      </ScrollView>
    </ImageBackground>
  )
}
const styles = StyleSheet.create({
    container:{
        
        justifyContent:'center',
        alignItems:'center',
      },
    Box:{
        width:"100%",
        height:200,
        backgroundColor:'black',
        padding:20,
        borderBottomLeftRadius:10,
        borderBottomRightRadius:10
    },
    lesson: {
        width: '100%',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop:20,
       paddingBottom:300
      },
    BoxSmall:{
        width:300,
        height:150,
        borderRadius:10,
    borderWidth:1,
    borderColor:'white',
    marginTop:10,
    backgroundColor:'white',
    padding:10
    },
    
    })

