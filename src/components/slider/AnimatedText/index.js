import React from 'react';
import Animated, {useAnimatedProps} from 'react-native-reanimated';
import {TextInput} from 'react-native-gesture-handler';

const AnimatedTextInput = Animated.createAnimatedComponent(TextInput);

const AnimatedText = ({text, style}) => {
  const animatedProps = useAnimatedProps(() => {
    return {
      text: text.value,
    };
  });

  return (
    <AnimatedTextInput
      underlineColorAndroid="transparent"
      editable={false}
      value={text.value}
      animatedProps={animatedProps}
      style={[{paddingVertical: 0}, style]}
    />
  );
};

export default AnimatedText;
