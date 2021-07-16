import React from 'react';
import {Text} from 'react-native';

const HeavyText = ({children, style}) => {
  return <Text style={[{fontFamily: 'Lato-Black'}, style]}>{children}</Text>;
};

export default HeavyText;
