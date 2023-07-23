import React, {useState, useEffect} from 'react';
import { View, StyleSheet, Text, ImageBackground, ScrollView, TouchableOpacity, Image } from 'react-native';
import profile from '../assets/profile.png'
import audioBack from '../assets/audioBack.jpg'
import Icon from 'react-native-vector-icons/FontAwesome';
import { Modal } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const  Home =({navigation ,  handleLogout })  => {
const [isDropdownOpen, setIsDropdownOpen] = useState(false)
const [username, setUsername] = useState('');

useEffect(() => {
  // Fetch the username from AsyncStorage
  const fetchUsername = async () => {
    try {
      const storedUsername = await AsyncStorage.getItem('username');
      if (storedUsername) {
        setUsername(storedUsername);
      } else {
        // Handle the case when the username is not found in AsyncStorage
        console.log('Username not found in AsyncStorage.');
      }
    } catch (error) {
      console.log('Error fetching username from AsyncStorage:', error);
    }
  };

  // Call the fetchUsername function inside useEffect
  fetchUsername();
}, []);
 
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const handleLoginButtonPress = () => {
    // Call the handleLogin function passed from the root App component
    handleLogout();
  };

  
  
const cancle = () => {
 setIsDropdownOpen(false)
 setShowLogoutModal(false)
}
const log = () => {
  setShowLogoutModal(true)
  setIsDropdownOpen(false)
}
  return (
  
      <ImageBackground source={audioBack} style={styles.container} >
        <View  style={styles.Box1}>
        <View style={{flexDirection:'row', justifyContent:'space-between',alignItems:'center', width:'100%', marginTop:25}}>
        <TouchableOpacity onPress={() => setIsDropdownOpen(true)} style={{width:40, height:40, backgroundColor:'black', borderRadius:10, justifyContent:'center',  alignItems:'center'}}>
           <Image source={profile}style={{width:20, height:20,}} />
        </TouchableOpacity>
        
        <TouchableOpacity style={{width:40, height:40, borderRadius:10, justifyContent:'center', alignItems:'center',
       backgroundColor:'white'}} onPress={() => navigation.navigate('Basics')}>
        <Icon name='chevron-right' size={20} color='black'/></TouchableOpacity>
           </View>
           {isDropdownOpen && (
            <TouchableOpacity onPress={() => setIsDropdownOpen(false)} style={{width:'100%', backgroundColor:'transparent', height:600,  position:'relative',}}>
            <View  style={{ padding:20, justifyContent:'center',alignItems:'center', 
            backgroundColor:'black', 
            position:'absolute',
            borderRadius:10,
            zIndex:99999
          
          }}>

          <Text style={{color:'white', fontSize:20, width:'100%', textAlign:'center', marginBottom:20}}>{username || 'Guest'}</Text>
          <TouchableOpacity onPress={log} style={styles.logoutButton}>
          <Text style={styles.logoutButtonText}>Logout</Text>
        </TouchableOpacity>
            </View>
            </TouchableOpacity>
          )}
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
        <Modal visible={showLogoutModal} transparent animationType="fade">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>Are you sure you want to logout?</Text>
            <View style={styles.modalButtonContainer}>
              <TouchableOpacity onPress={handleLoginButtonPress} style={styles.confirmButton}>
                <Text style={styles.buttonText}>Confirm</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={cancle} style={styles.cancelButton}>
                <Text style={styles.buttonText}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
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
  logoutButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
  },
  modalButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  confirmButton: {
    backgroundColor: 'red',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginRight: 10,
  },
  cancelButton: {
    backgroundColor: 'gray',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
export default Home