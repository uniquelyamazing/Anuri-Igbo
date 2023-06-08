import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is already logged in
    AsyncStorage.getItem('userToken')
      .then((token) => {
        if (token) {
          // Get user data from backend using the token
          axios.get('/auth/user', {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
            .then((response) => {
              setUser(response.data);
              setLoading(false);
            })
            .catch((error) => {
              console.error(error);
              setLoading(false);
            });
        } else {
          setLoading(false);
        }
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  const login = (token) => {
    // Save the token to AsyncStorage
    AsyncStorage.setItem('userToken', token)
      .then(() => {
        // Get user data from backend using the token
        axios.get('/auth/user', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
          .then((response) => {
            setUser(response.data);
          })
          .catch((error) => {
            console.error(error);
          });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const logout = () => {
    // Remove the token from AsyncStorage
    AsyncStorage.removeItem('userToken')
      .then(() => {
        setUser(null);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  if (loading) {
    // Show loading screen while checking authentication status
    return null;
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
