import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useDerivedValue,
  runOnJS,
} from 'react-native-reanimated';
import {useDispatch} from 'react-redux';
import {updateFoodQuantity} from '../../../redux/createMealSlice';
import {PanGestureHandler} from 'react-native-gesture-handler';
import styles from './styles';
import {clamp} from '../../../utils';
import AnimatedText from '../AnimatedText';
import {ReText} from 'react-native-redash';

const Slider = ({numbers, sliderWidth, id, getValue}) => {
  const SLIDER_WIDTH = sliderWidth;
  const KNOB_WIDTH = 30;
  const MAX_RANGE = 500;

  const [value, setValue] = useState(0);
  const translateX = useSharedValue(0);
  const isSliding = useSharedValue(false);
  const dispatch = useDispatch();

  useEffect(() => {
    // const timerId = setTimeout(() => {
    dispatch(updateFoodQuantity({grams: value, id}));
    // }, 10);

    // return () => {
    //   clearTimeout(timerId);
    // };
  }, [value]);

  const onGestureEvent = useAnimatedGestureHandler({
    onStart: (_, ctx) => {
      ctx.offsetX = translateX.value;
    },
    onActive: (event, ctx) => {
      isSliding.value = true;
      translateX.value = clamp(
        event.translationX + ctx.offsetX,
        0,
        SLIDER_WIDTH - KNOB_WIDTH,
      );
    },
    onEnd: () => {
      isSliding.value = false;
    },
  });

  const scrollTranslationStyle = useAnimatedStyle(() => {
    return {transform: [{translateX: translateX.value}]};
  });

  const progressStyle = useAnimatedStyle(() => {
    return {
      width: translateX.value + KNOB_WIDTH,
    };
  });
  const updateQuantity = grams => {
    setValue(grams);
  };
  const stepText = useDerivedValue(() => {
    const sliderRange = SLIDER_WIDTH - KNOB_WIDTH;
    const oneStepValue = sliderRange / MAX_RANGE;
    const step = Math.ceil(translateX.value / oneStepValue);
    getValue(String(step));
    runOnJS(updateQuantity)(step);
    return String(step);
  });

  return (
    <View
      style={[
        styles.slider,
        {
          height: KNOB_WIDTH,
          width: SLIDER_WIDTH,
          borderRadius: KNOB_WIDTH / 2,
        },
      ]}>
      <Animated.View
        style={[styles.progress, progressStyle, {borderRadius: KNOB_WIDTH / 2}]}
      />

      <PanGestureHandler onGestureEvent={onGestureEvent} activeOffsetX={[0, 0]}>
        <Animated.View
          style={[
            styles.knob,
            scrollTranslationStyle,
            {
              height: KNOB_WIDTH,
              width: KNOB_WIDTH,
              borderRadius: KNOB_WIDTH / 2,
            },
          ]}>
          {/* <ReText text={stepText} style={{fontSize: 18}}/> */}
          {/* <AnimatedText text={stepText} /> */}
        </Animated.View>
      </PanGestureHandler>
    </View>
  );
};

export default Slider;
