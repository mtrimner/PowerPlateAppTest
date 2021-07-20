import React, {useState, memo} from 'react';
import {View, Pressable, Text, ImageBackground, StyleSheet} from 'react-native';
import Card from '../common/Card';
import HeavyText from '../common/text/HeavyText';
import Slider from '../slider/Slider';
import AnimatedText from '../slider/AnimatedText';
import {useSharedValue, useDerivedValue} from 'react-native-reanimated';
import styles from './styles';
import BoldText from '../common/text/BoldText';

const FoodCard = ({
  foodName,
  id,
  // item,
  baseCalories,
  baseCarbs,
  baseFat,
  baseProtein,
}) => {
  const [sliderWidth, setSliderWidth] = useState(200);
  const [text, setText] = useState(null);
  // const {baseCalories, baseCarbs, baseFat, baseProtein} = item;
  const grams = useSharedValue('');
  const carbs = useSharedValue(baseCarbs ? baseCarbs : 0);
  const fat = useSharedValue(baseFat ? baseFat : 0);
  const protein = useSharedValue(baseProtein ? baseProtein : 0);
  const calories = useSharedValue(baseCalories ? baseCalories : 0);

  const setGrams = string => {
    'worklet';
    grams.value = string;
  };

  const getSliderDimensions = layout => {
    const {width} = layout;
    setSliderWidth(Math.floor(width));
  };

  const carbsConsumed = useDerivedValue(() => {
    const multiplier = grams.value / 5;
    carbs.value = baseCarbs;
    const total = Math.ceil(multiplier * carbs.value);
    return String(total);
  });

  const proteinConsumed = useDerivedValue(() => {
    const multiplier = grams.value / 5;
    protein.value = baseProtein;
    const total = Math.ceil(multiplier * protein.value);
    return String(total);
  });

  const fatConsumed = useDerivedValue(() => {
    const multiplier = grams.value / 5;
    fat.value = baseFat;
    const total = Math.ceil(multiplier * fat.value);
    return String(total);
  });

  const caloriesConsumed = useDerivedValue(() => {
    const multiplier = grams.value / 5;
    calories.value = baseCalories;
    const total = Math.ceil(multiplier * calories.value);

    return String(total);
  });

  const getOunces = useDerivedValue(() => {
    const ounces = (Number(grams.value) / 28.35).toFixed(1);
    return ounces;
  });

  return (
    <Card style={styles.card}>
      <View>
        <HeavyText style={styles.foodName}>{foodName}</HeavyText>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          marginVertical: 10,
        }}>
        <View>
          <BoldText style={styles.macroLabel}>Calories</BoldText>
          <AnimatedText
            style={styles.macroAnimatedNumber}
            text={caloriesConsumed}
          />
        </View>
        <View>
          <BoldText style={styles.macroLabel}>Carbs</BoldText>
          <AnimatedText
            style={styles.macroAnimatedNumber}
            text={carbsConsumed}
          />
        </View>
        <View>
          <BoldText style={styles.macroLabel}>Fat</BoldText>
          <AnimatedText style={styles.macroAnimatedNumber} text={fatConsumed} />
        </View>
        <View>
          <BoldText style={styles.macroLabel}>Protein</BoldText>
          <AnimatedText
            style={styles.macroAnimatedNumber}
            text={proteinConsumed}
          />
        </View>
      </View>

      <View style={styles.inputContainer}>
        <View
          style={{
            flex: 1,
            marginLeft: 10,

            marginBottom: 3,
            justifyContent: 'flex-end',
          }}>
          <View
            style={{
              flexDirection: 'row',
              borderWidth: 2,
              borderRadius: 7,
              borderColor: 'rgba(0, 0, 0, 0.8)',
              justifyContent: 'center',
            }}>
            <AnimatedText style={[styles.macroAnimatedNumber]} text={grams} />
            <BoldText>&nbsp; g</BoldText>
          </View>
        </View>
        <View
          onLayout={event => {
            getSliderDimensions(event.nativeEvent.layout);
          }}
          style={{
            flex: 4,
            alignItems: 'center',
            marginHorizontal: 10,
          }}>
          <View style={{flexDirection: 'row', paddingVertical: 5}}>
            <AnimatedText style={{fontFamily: 'Lato-Black'}} text={getOunces} />
            <BoldText>&nbsp; oz</BoldText>
          </View>
          <Slider getValue={setGrams} sliderWidth={sliderWidth} id={id} />
        </View>
      </View>
    </Card>
  );
};

export default memo(FoodCard);
