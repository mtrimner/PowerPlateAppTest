import React, {useState} from 'react';
import {View, Pressable, Text} from 'react-native';

import Card from '../common/Card';
import Input from '../common/Input';
import BoldText from '../common/text/BoldText';
import Slider from '../slider/Slider';
import styles from './styles';

const FoodCard = ({foodName, amount, id}) => {
  const [sliderWidth, setSliderWidth] = useState(200);
  const [text, setText] = useState(null);

  const getSliderDimensions = layout => {
    const {width} = layout;
    setSliderWidth(Math.floor(width));
  };

  const onChange = value => {
    setText(value);
  };

  return (
    <Card style={styles.card}>
      <BoldText style={styles.foodName}>{foodName}</BoldText>
      <View style={styles.inputContainer}>
        <View
          style={{
            flex: 1,
            marginHorizontal: 10,
            justifyContent: 'center',
          }}>
          <Input
            style={styles.textInput}
            value={amount.toString()}
            onChangeText={value => onChange(value)}
          />
        </View>
        <View
          onLayout={event => {
            getSliderDimensions(event.nativeEvent.layout);
          }}
          style={{
            flex: 4,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'red',
            marginHorizontal: 10,
          }}>
          <Slider sliderWidth={sliderWidth} id={id} />
        </View>
      </View>
    </Card>
  );
};

export default FoodCard;
