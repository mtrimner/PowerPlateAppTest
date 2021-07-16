import React from 'react';
import {View, Text, TouchableOpacity, ActivityIndicator} from 'react-native';
import styles from './styles';

const Message = ({
  message,
  primary,
  secondary,
  danger,
  disabled,
  loading,
  onPress,
  info,
  success,
}) => {
  const getBackgroundColor = () => {
    if (primary) {
      return 'black';
    }
    if (danger) {
      return 'red';
    }
    if (success) {
      return 'green';
    }
    if (info) {
      return 'pink';
    }
  };
  return (
    <TouchableOpacity
      style={[styles.wrapper, {backgroundColor: getBackgroundColor()}]}>
      <View style={[styles.loaderSection]}>
        <Text
          style={{
            color: 'white',
          }}>
          {message}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Message;
