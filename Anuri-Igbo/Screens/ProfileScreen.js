import React, { useContext, useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { AuthContext } from '../auth/authContext';
import axios from 'axios';

const ProfileScreen = () => {
  const { user, logout } = useContext(AuthContext);
  const [username, setUsername] = useState(user.username || '');
  const [password, setPassword] = useState('');

  const handleSave = () => {
    const updatedData = {
      username,
      password,
    };

    // Send update request to backend
    axios.put('http://localhost:3000/api/profile', updatedData)
      .then((response) => {
// Handle success
console.log('Profile updated successfully');
})
.catch((error) => {
// Handle error
console.error(error);
});
};

const handleLogout = () => {logout();};

         return (
         <View>
         <TextInput
         placeholder="Username"
         value={username}
         onChangeText={(text) => setUsername(text)}
         />
         <TextInput
         placeholder="Password"
         secureTextEntry
         value={password}
         onChangeText={(text) => setPassword(text)}
         />
         <Button title="Save" onPress={handleSave} />
         <Button title="Logout" onPress={handleLogout} />
         </View>
         );
         };
         
         export default ProfileScreen;