import React from 'react';
import {View} from 'react-native';
import styles from '../Card/styles';

const Card = ({children, style}) => {
  return (
    <View style={[styles.card, style]}>
      <View style={styles.cardContent}>{children}</View>
    </View>
  );
};

export default Card;
