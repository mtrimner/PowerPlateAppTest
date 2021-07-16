import React from 'react';
import {Text, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {ADD_MEAL, FOOD_SEARCH, HOME_SCREEN} from '../constants/routeNames';
import Home from '../screens/Home';
import AddMeal from '../screens/AddMeal';
import FoodSearch from '../screens/FoodSearch';

const HomeStackNavigator = () => {
  const HomeStack = createStackNavigator();

  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name={HOME_SCREEN}
        component={Home}
        options={{
          headerShown: false,
          // headerTransparent: true,
          // headerTitle: false,
          // headerTintColor: '#FFFFFF',
        }}
      />
      <HomeStack.Screen name={ADD_MEAL} component={AddMeal} />
      <HomeStack.Screen
        name={FOOD_SEARCH}
        component={FoodSearch}></HomeStack.Screen>
    </HomeStack.Navigator>
  );
};

export default HomeStackNavigator;
