import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import ProgressBar from '../common/ProgressBar';
import LinearGradient from 'react-native-linear-gradient';
import CircularProgressBar from '../CircularProgressBar';
import {useSelector} from 'react-redux';
import BoldText from '../common/text/BoldText';
import RegularText from '../common/text/RegularText';
import styles from './styles';

const AddMealHeader = () => {
  const mealTotals = useSelector(state => state.createMeal);
  // const carbTotal = mealTotals
  //   .map(food => food.fat)
  //   .reduce((prev, next) => prev + next);

  return (
    <LinearGradient
      style={styles.wrapper}
      colors={['rgba(60, 146, 215, 0.8)', 'rgba(60, 146, 215, 1)']}>
      <SafeAreaView>
        <BoldText style={styles.headlineText}>Meal Targets</BoldText>
        <View style={{flexDirection: 'row'}}>
          <View>
            <CircularProgressBar />
          </View>
          <View>
            <View style={styles.macroDetails}>
              <RegularText style={styles.macroText}>FAT 50/100g</RegularText>
              <ProgressBar height={7} />
            </View>
            <View style={styles.macroDetails}>
              <RegularText style={styles.macroText}>CARBS 50/100g</RegularText>
              <ProgressBar height={7} />
            </View>
            <View style={styles.macroDetails}>
              <RegularText style={styles.macroText}>
                PROTEIN 50/100g
              </RegularText>
              <ProgressBar height={7} />
            </View>
          </View>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default AddMealHeader;
