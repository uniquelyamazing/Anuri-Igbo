import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, Alert, StyleSheet, TouchableOpacity, Text, ImageBackground, KeyboardAvoidingView } from 'react-native';
import { createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';

import { auth, firestore  } from '../firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';

import Icon from 'react-native-vector-icons/FontAwesome';
import sign from '../assets/sign.jpg'
import { color } from 'react-native-reanimated';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Modal } from 'react-native';
import { ActivityIndicator } from 'react-native';
const RegisterScreen = ({ navigation }) => {
 
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showEmailVerificationModal, setShowEmailVerificationModal] = useState(false);
  const handleRegister = async () => {
    setLoading(true);
    if (password !== confirmPassword) {
      Alert.alert("Passwords don't match");
      return;
    }

    try {
      const response = await createUserWithEmailAndPassword(auth, email, password);
      const userCredential = response.user;
      const userId = userCredential.uid;

      // Save the user's information in Firestore
      const userDocRef = await addDoc(collection(firestore, 'users'), {
        userId,
        email,
        username,
      });

      // Send email verification
      await sendEmailVerification(auth.currentUser);
      await AsyncStorage.setItem('userId', userId);
      await AsyncStorage.setItem('username', username);
      await AsyncStorage.setItem('email', email);
      console.log(response);
  
      Alert.alert(
        'Registration successful',
        userDocRef.id,
        [
          {
            text: 'OK',
            onPress: () => {
              // Navigate to the login screen after the user clicks "OK"
              navigation.navigate('Login');
            },
          },
        ]
      );
      setLoading(false);
      if (userCredential.emailVerified) {
        
        setShowEmailVerificationModal(false);
    
        
      } else {
        // Display the email verification modal
        setShowEmailVerificationModal(true);
      }
    } catch (error) {
      console.log('Registration failed', error.message);
      setLoading(false);
    }
  };
  const [isCloseVisible, setIsCloseVisible] = useState(false);

  useEffect(() => {
    let timer;
    if (showEmailVerificationModal) {
      timer = setTimeout(() => {
        setIsCloseVisible(true);
      }, 10000); // 10 seconds
    }
    return () => clearTimeout(timer);
  }, [showEmailVerificationModal]);

  const handleResendVerificationEmail = async () => {
    try {
      await sendEmailVerification(auth.currentUser);
      // Show the verification modal again
      setShowEmailVerificationModal(true);
    } catch (error) {
      console.log('Resend verification email failed:', error);
    }
  };
 

 
  
  const cancleMode = () => {
    navigation.navigate('Login');
    setShowEmailVerificationModal(false);
  }
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const EyeIcon = ({ visible }) => (
    <Icon name={visible ? 'eye-slash' : 'eye'} size={20} color="gray" />
  );

  return (
    
    <ImageBackground source={sign} style={styles.container}>
    <Text style={{fontSize:50, color:'black', marginBottom:30}} >SignUp</Text>
      <TextInput
        placeholder="Username"
        onChangeText={(text) => setUsername(text)}
        value={username}
        style={styles.Input}
      />
      <TextInput
        placeholder="Email"
        onChangeText={(text) => setEmail(text)}
        value={email}
        style={styles.Input}
      />
      <View style={styles.passwordInputContainer}>
        <TextInput
          placeholder="Password"
          secureTextEntry={!showPassword}
          onChangeText={(text) => setPassword(text)}
          value={password}
          style={styles.passwordInput}
        />
        <TouchableOpacity style={styles.eyeIconContainer} onPress={togglePasswordVisibility}>
          <EyeIcon visible={showPassword} />
        </TouchableOpacity>
      </View>
      <View style={styles.passwordInputContainer}>
        <TextInput
          placeholder="Confirm Password"
          secureTextEntry={!showPassword}
          onChangeText={(text) => setConfirmPassword(text)}
          value={confirmPassword}
          style={styles.passwordInput}
        />
        
      </View>
      <TouchableOpacity onPress={handleRegister} style={styles.button}>
      {loading ? (
        <ActivityIndicator size="small" color="blue" />
      ) : (
        <Text style={{color:'white', fontSize:20}}>Register</Text>
      )}
     
      </TouchableOpacity>
      
      <View style={{marginTop:20, flexDirection:'row'}}>
      <Text> Already have an account?</Text><TouchableOpacity style={{marginLeft:5}} onPress={() => navigation.navigate('Login')}><Text style={{fontSize:20, color:'blue'}} >Login</Text></TouchableOpacity>
      </View>
      <Modal visible={showEmailVerificationModal} transparent>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>
              Please verify your email address to proceed.
            </Text>
            <TouchableOpacity onPress={handleResendVerificationEmail}>
              <Text>Resend Verification Email</Text>
            </TouchableOpacity>
          {isCloseVisible && <TouchableOpacity
            onPress={cancleMode}
            style={styles.modalCloseButton}
          >
            <Text style={styles.modalCloseButtonText}>Close</Text>
          </TouchableOpacity>}
          </View>
        </View>
      </Modal>
    </ImageBackground>
    
  );
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  passwordInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    marginBottom: 10,
    width:"80%",
    marginTop:7,
    
  },
  passwordInput: {
    flex: 1,
    fontSize:20,
    color:'black'
  },
  eyeIconContainer: {
    marginLeft: 10,
  },
  Input:{
    justifyContent:'flex-start',
    width:"80%",
   marginBottom:20,
    justifyContent:'center',
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    color:'black',
  fontSize:20
  },
  button:{
    width:200,
    height:50,
    backgroundColor:'black',
    borderRadius:50,
    justifyContent:'center',
    alignItems:'center',
    marginTop:10
   
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
    width: '80%',
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
  },
  modalCloseButton: {
    backgroundColor: 'red',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignSelf: 'center',
  },
  modalCloseButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',}
});



export default RegisterScreen;