import React, {memo, useState} from 'react';
import {View, Text} from 'react-native';
import DateTimePicker from '../../common/DateTimePicker';
import BoldText from '../../common/text/BoldText';
import styles from './styles';
import CustomButton from '../../common/CustomButton';
import Entypo from 'react-native-vector-icons/Entypo';

const AgeSelection = ({onChange, selectedValue, onPress, prev}) => {
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
        return {...prev, height: 'Please select your date of birth'};
      });
    } else {
      onPress();
    }
  };

  return (
    <View>
      <BoldText style={styles.stepTitle}>When were you born?</BoldText>
      <DateTimePicker
        onChange={selectedDate => {
          onChange({name: 'dob', value: selectedDate});
        }}
        value={selectedValue}
        display="spinner"
        // error={errors.password}
      />
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
            <Entypo size={36} color="#ECF1F3" name="arrow-long-right"></Entypo>
          }
          secondary
          onPress={validate}
        />
      </View>
    </View>
  );
};

export default memo(AgeSelection);
