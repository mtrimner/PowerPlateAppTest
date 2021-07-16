import React, {memo, useState} from 'react';
import {View, Text} from 'react-native';
import RadioButton from '../../common/RadioButton';
import BoldText from '../../common/text/BoldText';
import styles from './styles';
import CustomButton from '../../common/CustomButton';
import Entypo from 'react-native-vector-icons/Entypo';

const sexRadioItems = [
  {
    label: 'Male',
    value: 'male',
    selected: false,
  },
  {
    label: 'Female',
    value: 'female',
    selected: false,
  },
];
const SexSelection = ({onSelect, prev, value, onPress}) => {
  const [errors, setErrors] = useState({});

  const validate = () => {
    if (value !== '') {
      setErrors(prev => {
        return {...prev, sex: null};
      });
    }

    if (!value) {
      setErrors(prev => {
        console.log(errors);
        return {...prev, sex: 'Please select your Sex'};
      });
    } else {
      onPress();
    }
  };

  const changeActiveRadio = index => {
    sexRadioItems.map(item => (item.selected = false));
    sexRadioItems[index].selected = true;
  };

  return (
    <>
      <BoldText style={styles.stepTitle}>What's your sex?</BoldText>
      {sexRadioItems.map((item, index) => (
        <RadioButton
          key={index}
          title={item.label}
          selected={item.selected}
          onPress={() => {
            onSelect({name: 'sex', value: item.value});
            changeActiveRadio(index);
          }}
          prev={prev}
        />
      ))}
      {errors && <Text style={styles.error}>{errors.sex}</Text>}
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
    </>
  );
};

export default memo(SexSelection);
