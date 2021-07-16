import React from 'react';
import {View, Text, Pressable, ActivityIndicator} from 'react-native';
import styles from './styles';

const CustomButton = ({
  title,
  primary,
  secondary,
  tertiary,
  danger,
  disabled,
  loading,
  onPress,
  style,
  textStyle,
  ...props
}) => {
  const getBackgroundColor = () => {
    if (disabled) {
      return 'grey';
    }
    if (primary) {
      return '#FFFFFF';
    }
    if (danger) {
      return 'red';
    }
    if (secondary) {
      return 'rgba(255, 255, 255, 0.0';
    }
    if (tertiary) {
      return '#d1a53a';
    }
  };
  return (
    <Pressable
      disabled={disabled}
      onPress={onPress}
      style={[styles.wrapper, {backgroundColor: getBackgroundColor()}, style]}>
      <View style={[styles.loaderSection]}>
        {loading && <ActivityIndicator color={'black'} />}

        {title && (
          <Text
            style={[{
              color: disabled ? 'black' : '#FFFFFF',
              paddingLeft: loading ? 5 : 0,
              fontSize: 22,
            }, textStyle]}>
            {title}
          </Text>
        )}
      </View>
    </Pressable>
  );
};

export default CustomButton;
