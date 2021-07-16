import React from 'react';
import {Text} from 'react-native';

const RegularText = ({children, style}) => {
  return <Text style={[{fontFamily: 'Lato-Regular'}, style]}>{children}</Text>;
};

export default RegularText;
