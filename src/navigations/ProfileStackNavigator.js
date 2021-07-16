import React from 'react';
import {Text, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {ADD_MEAL, FOOD_SEARCH, PROFILE_SCREEN} from '../constants/routeNames';
import Profile from '../screens/Profile';
import AddMeal from '../screens/AddMeal';
import FoodSearch from '../screens/FoodSearch';

const ProfileStackNavigator = () => {
  const ProfileStack = createStackNavigator();

  return (
    <ProfileStack.Navigator headerMode="screen">
      <ProfileStack.Screen name={PROFILE_SCREEN} component={Profile} />
    </ProfileStack.Navigator>
  );
};

export default ProfileStackNavigator;
