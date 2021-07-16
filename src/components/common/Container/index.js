import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import styles from './styles';

const Container = ({style, children}) => {
  return (
    <ScrollView contentContainerStyle={[styles.wrapper, style]}>
      {children}
    </ScrollView>
  );
};

export default Container;
