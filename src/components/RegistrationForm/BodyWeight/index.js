import React, {memo, useState} from 'react';
import {View, Text, TextInput} from 'react-native';
import Input from '../../common/Input';
import styles from './styles';
import CustomButton from '../../common/CustomButton';
import Entypo from 'react-native-vector-icons/Entypo';
import BoldText from '../../common/text/BoldText';

const BodyWeight = React.forwardRef(
  (
    {value, onChange, label, icon, error, style, prev, onPress, ...props},
    ref,
  ) => {
    const [focused, setFocused] = useState(false);
    const [errors, setErrors] = useState({});

    const validate = () => {
      if (value !== '') {
        setErrors(prev => {
          return {...prev, currentWeight: null};
        });
      }

      if (!value) {
        setErrors(prev => {
          return {...prev, currentWeight: 'Please enter your body weight'};
        });
      } else {
        onPress();
      }
    };

    const getBorderColor = () => {
      if (errors) {
        return 'red';
      }
      if (focused) {
        return '#ffffff';
      } else {
        return '#e2dcde';
      }
    };
    return (
      <View>
        <BoldText style={styles.stepTitle}>
          What's your current weight?
        </BoldText>
        <View
          style={[
            styles.wrapper,
            {alignItems: icon ? 'center' : 'baseline'},
            {borderColor: getBorderColor()},
            style,
          ]}>
          <View>
            <Text>LBS</Text>
          </View>
          <TextInput
            ref={ref}
            style={styles.textInput}
            onChangeText={textValue =>
              onChange({name: 'currentWeight', value: textValue})
            }
            value={value}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            {...props}
          />
        </View>
        {errors && <Text style={styles.error}>{errors.currentWeight}</Text>}
        <View style={styles.buttonContainer}>
          <CustomButton
            style={styles.button}
            title={
              <Entypo size={36} color="#ECF1F3" name="arrow-long-left"></Entypo>
            }
            secondary
            onPress={prev}
          />
          <CustomButton
            style={styles.button}
            title={
              <Entypo
                size={36}
                color="#ECF1F3"
                name="arrow-long-right"></Entypo>
            }
            secondary
            onPress={validate}
          />
        </View>
      </View>
    );
  },
);

export default memo(BodyWeight);
