import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';

const ProgressBar = ({style, height}) => {
  const getBarHeight = () => {
    if (height) {
      return height;
    } else return 10;
  };
  return (
    <View style={[styles.emptyProgressBar, style, {height: getBarHeight()}]}>
      <View style={[styles.filledProgressBar, {height: getBarHeight()}]} />
    </View>
  );
};

export default ProgressBar;
