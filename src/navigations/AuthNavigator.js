import React from 'react';
import {Text, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {LOGIN, REGISTER, WELCOME} from '../constants/routeNames';
import Login from '../screens/Login';
import Register from '../screens/Register';
import Welcome from '../screens/Welcome';

const AuthNavigator = () => {
  const AuthStack = createStackNavigator();

  return (
    <AuthStack.Navigator>
      <AuthStack.Screen name={WELCOME} component={Welcome} />
      <AuthStack.Screen
        name={REGISTER}
        component={Register}
        options={{
          headerTransparent: true,
          headerTitle: false,
          headerTintColor: '#FFFFFF',
        }}
      />
      <AuthStack.Screen
        name={LOGIN}
        component={Login}
        options={{
          headerTransparent: true,
          headerTitle: false,
        }}
      />
    </AuthStack.Navigator>
  );
};

export default AuthNavigator;
