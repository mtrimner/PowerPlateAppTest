import React from 'react';
import {View, Text, Button} from 'react-native';
import styles from './styles';

const Step = ({
  children,
  currentIndex,
  nextStep,
  prevStep,
  isLast,
  onChange,
  onSelect,
  values,
}) => {
  return (
    <View style={{flex: 1}}>
      {children({
        onChange,
        onSelect,
        values,
      })}
      <View style={styles.buttonWrapper}>
        <Button title="Prev" onPress={prevStep} disabled={currentIndex === 0} />
        <Button title="Next" onPress={nextStep} disabled={isLast} />
      </View>
    </View>
  );
};

export default Step;
