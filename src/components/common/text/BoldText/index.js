import React from 'react';
import {Text} from 'react-native';

const BoldText = ({children, style}) => {
  return <Text style={[{fontFamily: 'Lato-Bold'}, style]}>{children}</Text>;
};

export default BoldText;
