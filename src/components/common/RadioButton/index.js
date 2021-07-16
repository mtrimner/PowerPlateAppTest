import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import BoldText from '../text/BoldText';

const RadioButton = ({title, selected, loading, onPress, style, ...props}) => {
  const getBackgroundColor = () => {
    if (selected) {
      return '#FFFFFF';
    } else {
      null;
    }
  };
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.wrapper, {backgroundColor: getBackgroundColor()}, style]}>
      <View style={[styles.loaderSection]}>
        <BoldText
          style={{
            color: selected ? '#3C92D7' : '#ffffff',
            paddingLeft: loading ? 5 : 0,
            fontSize: 22,
          }}>
          {title}
        </BoldText>
      </View>
    </TouchableOpacity>
  );
};

export default RadioButton;
