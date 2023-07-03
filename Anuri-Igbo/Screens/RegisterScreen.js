import React, { useState } from 'react';
import { View, TextInput, Button, Alert, StyleSheet, TouchableOpacity, Text, ImageBackground } from 'react-native';
import { createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';

import { auth, firestore  } from '../firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';

import Icon from 'react-native-vector-icons/FontAwesome';
import sign from '../assets/sign.jpg'
import { color } from 'react-native-reanimated';
import AsyncStorage from '@react-native-async-storage/async-storage';
const RegisterScreen = ({ navigation }) => {
 
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);


  const handleRegister = async () => {
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
  
      console.log(response);
      Alert.alert('Registration successful', userDocRef.id);
  
      if (userCredential.emailVerified) {
        // Proceed with login
        navigation.navigate('Login');
      } else {
        // Display a message to the user indicating that they need to verify their email
        Alert.alert(
          'Email Verification Required',
          'Please verify your email address to proceed.',
          [
            {
              
              onPress: () => {
                // This callback is executed when the "OK" button is pressed
                // Check email verification status again
                userCredential.reload().then(() => {
                  if (auth.currentUser.emailVerified) {
                    // Email has been verified, navigate to the login screen
                    navigation.navigate('Login');
                  }
                });
              },
              style: 'default',
              enabled: false, // Disable the button initially
            },
          ]
        );
      }
    } catch (error) {
      console.log('Registration failed', error.message);
    }
  };
  
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
});



export default RegisterScreen;