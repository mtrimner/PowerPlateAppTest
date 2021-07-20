import React, {useState} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import ProgressBar from '../common/ProgressBar';
import AnimatedProgressBar from '../AnimatedProgressBar';
import LinearGradient from 'react-native-linear-gradient';
import CircularProgressBar from '../CircularProgressBar';
import {useSelector} from 'react-redux';
import AnimatedText from '../slider/AnimatedText';
import {useSharedValue, useDerivedValue} from 'react-native-reanimated';
import BoldText from '../common/text/BoldText';
import RegularText from '../common/text/RegularText';
import styles from './styles';

const AddMealHeader = () => {
  const mealTotals = useSelector(state => state.createMeal);
  const [sliderWidth, setSliderWidth] = useState(200);
  // const carbTotal = mealTotals
  //   .map(food => food.fat)
  //   .reduce((prev, next) => prev + next);
  const {totalCarbs, totalFat, totalProtein, totalCalories} = mealTotals;
  const carbs = useSharedValue(totalCarbs ? totalCarbs : 0);
  const fat = useSharedValue(totalFat ? totalFat : 0);
  const protein = useSharedValue(totalProtein ? totalProtein : 0);
  const calories = useSharedValue(totalCalories ? totalCalories : 0);

  calories.value = totalCalories;

  const getSliderDimensions = layout => {
    const {width} = layout;
    setSliderWidth(Math.floor(width));
  };
  console.log(sliderWidth);
  console.log('Header');
  return (
    <LinearGradient
      style={styles.wrapper}
      colors={['rgba(60, 146, 215, 0.8)', 'rgba(60, 146, 215, 1)']}>
      <SafeAreaView>
        <BoldText style={styles.headlineText}>Meal Targets</BoldText>
        <View style={{flexDirection: 'row'}}>
          <View>
            <CircularProgressBar value={totalCalories} />
          </View>
          <View
            onLayout={event => {
              getSliderDimensions(event.nativeEvent.layout);
            }}>
            <View style={styles.macroDetails}>
              <RegularText style={styles.macroText}>FAT 50/100g</RegularText>
              <View>
                <AnimatedProgressBar sliderWidth={sliderWidth} />
              </View>
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
