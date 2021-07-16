import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeStackNavigator from './HomeStackNavigator';
import {
  HOME_STACK_NAVIGATOR,
  STATS_SCREEN,
  PROFILE_STACK_NAVIGATOR,
} from '../constants/routeNames';
import Stats from '../screens/Stats';
import Profile from '../screens/Profile';
import ProfileStackNavigator from './ProfileStackNavigator';

const MainTabNavigator = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator>
      <Tab.Screen
        name={HOME_STACK_NAVIGATOR}
        component={HomeStackNavigator}></Tab.Screen>
      <Tab.Screen name={STATS_SCREEN} component={Stats}></Tab.Screen>
      <Tab.Screen
        name={PROFILE_STACK_NAVIGATOR}
        component={ProfileStackNavigator}></Tab.Screen>
    </Tab.Navigator>
  );
};

export default MainTabNavigator;
