import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SignupScreen = () => {
  const navigation = useNavigation();

  const [username, setUsername]= useState('')
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  const handleSignup = () => {
    // Check if password and confirm password match
    if (password !== confirmPassword) {
      console.log('Passwords do not match');
      return;
    }

    // Send a POST request to the signup route on the server
    fetch('http://localhost:3000/api/auth/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    })
      .then(response => response.json())
      .then(data => {
        // Handle the response from the server
        if (data.error) {
          setError(data.error);
          setMessage('');
        } else {
          setMessage(data.message);
          setError('');
          setUsername('')
          setEmail('');
          setPassword('');
          setConfirmPassword('');
          // Redirect to the login page
          navigation.navigate('Login');
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
        placeholder="UserName"
        value={username}
        onChangeText={text => setUsername(text)}
      />
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={text => setEmail(text)}
      />
      <View style={{ flexDirection: 'row' }}>
        <TextInput
          placeholder="Password"
          secureTextEntry={!showPassword}
          value={password}
          onChangeText={text => setPassword(text)}
          style={{ flex: 1 }}
        />
        <Button
          title={showPassword ? 'Hide' : 'Show'}
          onPress={() => setShowPassword(!showPassword)}
        />
      </View>
      <View style={{ flexDirection: 'row' }}>
        <TextInput
          placeholder="Confirm Password"
          secureTextEntry={!showConfirmPassword}
          value={confirmPassword}
          onChangeText={text => setConfirmPassword(text)}
          style={{ flex: 1 }}
        />
        <Button
          title={showConfirmPassword ? 'Hide' : 'Show'}
          onPress={() => setShowConfirmPassword(!showConfirmPassword)}
        />
      </View>
      <Button title="Signup" onPress={handleSignup} />
      {error ? <Text style={{ color: 'red' }}>{error}</Text> : null}
      {message ? <Text style={{ color: 'green' }}>{message}</Text> : null}
    </View>
  );
};

export default SignupScreen;
