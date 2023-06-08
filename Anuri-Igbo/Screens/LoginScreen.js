import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
const LoginScreen = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = () => {
    // Send a POST request to the login route on the server
    axios
    .post('/auth/login', { username, password, confirmPassword })
    .then(response => {
      // Handle the response from the server
      const data = response.data;
        if (data.error) {
          setError(data.error);
          setMessage('');
        } else {
          setMessage(data.message);
          setError('');
          // Redirect to the home screen after successful login
          // Replace 'Home' with the actual name of your home screen component
          navigation.navigate('Home');
        }
      })
      .catch(error => {
        setError('An error occurred');
        console.error('Error:', error);
      });
  };

  return (
    <View>
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={text => setUsername(text)}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={text => setPassword(text)}
      />
      <Button title="Login" onPress={handleLogin} />
      {error ? <Text style={{ color: 'red' }}>{error}</Text> : null}
      {message ? <Text style={{ color: 'green' }}>{message}</Text> : null}
    </View>
  );
};

export default LoginScreen;
