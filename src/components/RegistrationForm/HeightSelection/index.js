import React, {memo, useState} from 'react';
import {View, Text} from 'react-native';
import {HEIGHTOPTIONS} from '../../../constants/heightOptions';
import CustomButton from '../../common/CustomButton';
import Picker from '../../common/Picker';
import BoldText from '../../common/text/BoldText';
import styles from './styles';
import Entypo from 'react-native-vector-icons/Entypo';

const HeightSelection = ({onChange, selectedValue, onPress}) => {
  const [errors, setErrors] = useState({});

  const validate = () => {
    if (selectedValue !== '') {
      setErrors(prev => {
        return {...prev, height: null};
      });
    }

    if (!selectedValue) {
      setErrors(prev => {
        console.log(errors);
        return {...prev, height: 'Please select your height'};
      });
    } else {
      onPress();
    }
  };
  return (
    <View>
      <BoldText style={styles.stepTitle}>How tall are you? </BoldText>
      <Picker
        options={HEIGHTOPTIONS}
        selectedValue={selectedValue}
        onValueChange={item => onChange({name: 'height', value: item})}
      />
      {errors && <Text style={styles.error}>{errors.height}</Text>}
      <View style={styles.buttonContainer}>
        <CustomButton
          style={styles.button}
          title={
            <Entypo size={36} color="#ECF1F3" name="arrow-long-right"></Entypo>
          }
          secondary
          onPress={validate}
        />
      </View>
    </View>
  );
};

export default memo(HeightSelection);
