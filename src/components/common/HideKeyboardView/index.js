import React from 'react';
import {
  Keyboard,
  StyleSheet,
  View,
  Text,
  TextInput,
  Pressable,
} from 'react-native';

const HideKeyboardView = ({children}) => (
  <Pressable onPress={() => Keyboard.dismiss()}>{children}</Pressable>
);

export default HideKeyboardView;
