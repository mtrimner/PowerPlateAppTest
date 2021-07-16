import React, {useEffect} from 'react';
import {View, Dimensions, Text, StyleSheet, Platform} from 'react-native';
import Svg, {Circle} from 'react-native-svg';
import Animated, {
  useAnimatedProps,
  useDerivedValue,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {ReText} from 'react-native-redash';
import BoldText from '../common/text/BoldText';
import RegularText from '../common/text/RegularText';

const {width, height} = Dimensions.get('window');

const CIRCLE_LENGTH = width * 1.2;
const R = CIRCLE_LENGTH / (2 * Math.PI);
const STROKE_WIDTH = 12;
const halfCircle = R + STROKE_WIDTH;

const AnimatedCircle = Animated.createAnimatedComponent(Circle);
const CircularProgressBar = () => {
  const progress = useSharedValue(0);

  useEffect(() => {
    const progressAmount = 2200 / 2400;
    progress.value = withTiming(progressAmount, {duration: 1000});
  }, []);

  const animatedProps = useAnimatedProps(() => {
    if (progress.value <= 1) {
      return {
        strokeDashoffset:
          CIRCLE_LENGTH * parseFloat((1 - progress.value).toFixed(2)),
      };
    } else {
      return {strokeDashoffset: 0};
    }
  });

  const progressText = useDerivedValue(() => {
    return `${Math.floor(progress.value * 2400)}`;
  });

  return (
    <View
      style={{
        width: R * 2,
        // justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View
        style={{
          position: 'absolute',
          top: CIRCLE_LENGTH / 18,
          alignItems: 'center',
        }}>
        <ReText
          style={{
            fontSize: R / 2.5,
            color: 'rgba(256,256,256,0.9)',
            fontFamily: 'Lato-Bold',
            marginBottom: Platform.OS === 'ios' ? 0 : -12,
          }}
          text={progressText}
        />
        <RegularText
          style={{
            fontSize: R / 4.5,
            color: 'rgba(256,256,256,0.9)',
            marginBottom: 5,
            marginLeft: -5,
          }}>
          / 2400
        </RegularText>
        <BoldText
          style={{
            fontSize: R / 5,
            color: 'rgba(256,256,256,0.9)',
          }}>
          CALORIES
        </BoldText>
      </View>
      <Svg
        width={R * 2}
        height={R * 2}
        viewBox={`0 0 ${halfCircle * 2} ${halfCircle * 2}`}>
        <Circle
          cx="50%"
          cy="50%"
          r={R}
          stroke={'rgba(236, 241, 243, 0.3)'}
          strokeWidth={STROKE_WIDTH}
        />
        <AnimatedCircle
          cx="50%"
          cy="50%"
          r={R}
          stroke={'rgba(255, 255, 255, 1)'}
          strokeWidth={STROKE_WIDTH / 1.5}
          strokeDasharray={CIRCLE_LENGTH}
          animatedProps={animatedProps}
          strokeLinecap={'round'}
        />
      </Svg>
    </View>
  );
};

export default CircularProgressBar;
