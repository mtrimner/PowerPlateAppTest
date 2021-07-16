import React from 'react';
import {Text, View} from 'react-native';
import ProgressBar from '../common/ProgressBar';
import {useSelector} from 'react-redux';
import BoldText from '../common/text/BoldText';
import RegularText from '../common/text/RegularText';
import styles from './styles';

const AddMealHeader = () => {
  const mealTotals = useSelector(state => state.createMeal);
  // const carbTotal = mealTotals
  //   .map(food => food.fat)
  //   .reduce((prev, next) => prev + next);
  console.log(mealTotals);
  return (
    <View style={styles.wrapper}>
      <BoldText style={styles.headlineText}>Meal Targets</BoldText>
      <View style={styles.macroDetails}>
        <RegularText style={styles.macroText}>FAT 50/100g</RegularText>
        <ProgressBar height={7} />
      </View>
      <View style={styles.macroDetails}>
        <RegularText style={styles.macroText}>CARBS 50/100g</RegularText>
        <ProgressBar height={7} />
      </View>
      <View style={styles.macroDetails}>
        <RegularText style={styles.macroText}>PROTEIN 50/100g</RegularText>
        <ProgressBar height={7} />
      </View>
    </View>
  );
};

export default AddMealHeader;
