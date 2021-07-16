import React from 'react';
import {View} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {
  HOME_STACK_NAVIGATOR,
  MAIN_TAB_NAVIGATOR,
  PROFILE_STACK_NAVIGATOR,
} from '../constants/routeNames';
import MainTabNavigator from './MainTabNavigator';
import ProfileStackNavigator from './MainTabNavigator';
import HomeStackNavigator from './HomeStackNavigator';


import DrawerMenu from './DrawerMenu';

const getDrawerContent = navigation => {
  return <DrawerMenu navigation={navigation} />;
};
const DrawerNavigator = () => {
  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator
      drawerType="front"
      drawerStyle={{width: '100%'}}
      drawerContent={({navigation}) => getDrawerContent(navigation)}>
      <Drawer.Screen
        name={MAIN_TAB_NAVIGATOR}
        component={MainTabNavigator}
        options={{swipeEnabled: false}}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
