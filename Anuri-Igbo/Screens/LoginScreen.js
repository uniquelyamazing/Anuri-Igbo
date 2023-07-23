import React, { useState , useEffect} from 'react';
import { Text, View, TextInput, TouchableOpacity, Alert, ActivityIndicator, KeyboardAvoidingView } from 'react-native';
import { signInWithEmailAndPassword, setPersistence, browserLocalPersistence } from 'firebase/auth';
import { updateProfile } from 'firebase/auth';
import { Ionicons } from '@expo/vector-icons';
import Login from '../assets/login.jpg'
import { ImageBackground } from 'react-native';
import { auth } from '../firebaseConfig';
import { StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function LoginScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async () => {
    setLoading(true); // Show the loader

    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      const user = response.user;

      // Set the username as the user's display name
      await updateProfile(user, {
        displayName: username,
      });

      console.log(response);
      Alert.alert('Login successful');

      // Save the login status flag to AsyncStorage
      await AsyncStorage.setItem('loginStatus', 'loggedIn');

      // Navigate to 'insideLayout'
      navigation.navigate('Home');
    } catch (error) {
      console.log('Login failed', error.message);
      setErrorMessage(error.message);
    }

    setLoading(false); // Hide the loader
  };
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  useEffect(() => {
    if (errorMessage !== '') {
      const timer = setTimeout(() => {
        setErrorMessage('');
      }, 5000); // Duration in milliseconds

      return () => clearTimeout(timer);
    }
  }, [errorMessage]);


  return (
    
    <ImageBackground source={Login} style={styles.container}>
    <Text style={{fontSize:50, color:'white'}} >LOGIN</Text>
    <View style={styles.InputContainer}>
    
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        placeholderTextColor='gray'
        style={styles.Input}
      />
      <View style={styles.passwordInputContainer}>
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={!showPassword}
          style={styles.passwordInput}
          placeholderTextColor='gray'
        />
        <TouchableOpacity onPress={toggleShowPassword}style={styles.eyeIconContainer}>
          <Ionicons name={showPassword ? 'eye-off' : 'eye'} size={24} color='gray' />
        </TouchableOpacity>
      </View>

      {/* Display error message */}
      {errorMessage !== '' && <Text style={{color:'red', fontSize:10}}>{errorMessage}</Text>}

      {/* Login button */}
      <TouchableOpacity onPress={handleLogin} style={styles.button}>
        {loading ? (
          <ActivityIndicator size="small" color="blue" />
        ) : (
          <Text style={{color:'black', fontSize:20}}>Login</Text>
        )}
      </TouchableOpacity>
      </View>
      <View >
    <Text style={{color:'white', fontSize:16}}>Do not have an account? <TouchableOpacity onPress={() => navigation.navigate('Register')}>
    <Text style={{color:'white', fontSize:25}}>SignUp</Text>
    </TouchableOpacity>
    </Text>
    </View>
    </ImageBackground>
   
  );
}





const styles = StyleSheet.create({
container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    
  },
  InputContainer:{
  width:'100%',
  height:"50%",
  justifyContent:'center',
  alignItems:'center',
 
  },
  Input:{
    justifyContent:'flex-start',
    width:"80%",
   marginBottom:20,
    justifyContent:'center',
    borderBottomWidth: 1,
    borderBottomColor: 'white',
    color:'white',
  fontSize:20
  },
  button:{
    width:200,
    height:50,
    backgroundColor:'white',
    borderRadius:50,
    justifyContent:'center',
    alignItems:'center',
    marginTop:10
   
  },
  passwordInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'white',
    marginBottom: 10,
    width:"80%",
    marginTop:7,
    
  },
  passwordInput: {
    flex: 1,
    color:'white',
  fontSize:20,
    borderRadius:10,
    
    
  },
})
