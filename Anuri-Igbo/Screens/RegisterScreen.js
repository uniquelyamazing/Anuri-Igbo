import React, { useState } from 'react';
import { View, TextInput, Button, Alert, StyleSheet, TouchableOpacity } from 'react-native';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebaseConfig';
import Icon from 'react-native-vector-icons/FontAwesome';

const RegisterScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
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
      console.log(response);
      Alert.alert('Registration successful');
      navigation.navigate('Login');
    } catch (error) {
      console.log('Registration failed', error.message);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const EyeIcon = ({ visible }) => (
    <Icon name={visible ? 'eye' : 'eye-slash'} size={20} color="gray" />
  );

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Username"
        onChangeText={(text) => setUsername(text)}
        value={username}
      />
      <TextInput
        placeholder="Email"
        onChangeText={(text) => setEmail(text)}
        value={email}
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
        <TouchableOpacity style={styles.eyeIconContainer} onPress={togglePasswordVisibility}>
          <EyeIcon visible={showPassword} />
        </TouchableOpacity>
      </View>
      <Button title="Register" onPress={handleRegister} />
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop:20
  },
  passwordInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    marginBottom: 10,
  },
  passwordInput: {
    flex: 1,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  eyeIconContainer: {
    marginLeft: 10,
  },
});

export default RegisterScreen;