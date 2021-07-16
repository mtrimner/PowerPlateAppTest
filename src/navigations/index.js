import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {View, Text} from 'react-native';
import AuthNavigator from './AuthNavigator';
import HomeNavigator from './MainTabNavigator';
import DrawerNavigator from './DrawerNavigator';
import MainTabNavigator from './MainTabNavigator';
import auth from '@react-native-firebase/auth';

const AppNavContainer = () => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  const onAuthStateChanged = user => {
    setUser(user);
    if (initializing) setInitializing(false);
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  if (initializing) return null;

  const isLoggedIn = false;
  return (
    <NavigationContainer>
      {!user ? <AuthNavigator /> : <DrawerNavigator />}
    </NavigationContainer>
  );
};

export default AppNavContainer;
