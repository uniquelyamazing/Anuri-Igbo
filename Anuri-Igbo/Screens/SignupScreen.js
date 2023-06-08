import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Login from './LoginScreen';
import axios from 'axios';

const SignupScreen = () => {
  const navigation = useNavigation();

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  const handleChange = (name, value) => {
    switch (name) {
      case 'username':
        setUsername(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      case 'confirmPassword':
        setConfirmPassword(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = async () => {
    // Check if password and confirm password match
    if (password !== confirmPassword) {
      console.log('Passwords do not match');
      return;
    }

    try {
      await axios.post('/auth/signup', {
        username,
        email,
        password,
        confirmPassword,
      });
      setMessage('User created successfully');
      setError('');
      setUsername('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
      // Redirect to the login page
      navigation.navigate(Login);
    } catch (error) {
      setError('An error occurred');
      console.error('Error:', error);
    }
  };

  return (
    <View>
      <TextInput
        placeholder="UserName"
        value={username}
        onChangeText={(text) => handleChange('username', text)}
      />
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={(text) => handleChange('email', text)}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry={true}
        value={password}
        onChangeText={(text) => handleChange('password', text)}
      />
      <TextInput
        placeholder="Confirm Password"
        secureTextEntry={true}
        value={confirmPassword}
        onChangeText={(text) => handleChange('confirmPassword', text)}
      />
      <Button title="Signup" onPress={handleSubmit} />
      {error ? <Text style={{ color: 'red' }}>{error}</Text> : null}
      {message ? <Text style={{ color: 'green' }}>{message}</Text> : null}
    </View>
  );
};

export default SignupScreen;
