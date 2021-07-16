import {loadOptions} from '@babel/core';
import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import Container from '../../components/common/Container';
import BoldText from '../../components/common/text/BoldText';
import styles from './styles';

const menuItems = [{name: 'Settings'}, {name: 'Test'}];
const DrawerMenu = ({navigation}) => {
  return (
    <SafeAreaView style={{backgroundColor: 'red'}}>
      <Pressable
        onPress={() => {
          navigation.toggleDrawer();
        }}>
        <Text>X</Text>
      </Pressable>
      <Container>
        <View>
          {menuItems.map(({name}) => (
            <TouchableOpacity key={name} style={styles.menuItem}>
              <BoldText style={styles.itemText}>{name}</BoldText>
            </TouchableOpacity>
          ))}
        </View>
      </Container>
    </SafeAreaView>
  );
};

export default DrawerMenu;
