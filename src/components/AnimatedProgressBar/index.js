import React, {useEffect} from 'react';
import {View, Dimensions, Text, StyleSheet, Platform} from 'react-native';
import Svg, {Circle, Rect} from 'react-native-svg';
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

const STROKE_WIDTH = 12;
// const halfCircle = R + STROKE_WIDTH;

const AnimatedRectangle = Animated.createAnimatedComponent(Rect);
const ProgressBar = ({value = 700, barHeight = 7, sliderWidth = 200}) => {
  const progress = useSharedValue(0);
  console.log('Rendered');

  const BAR_WIDTH = sliderWidth;
  const BAR_HEIGHT = barHeight;
  // const sliderWidth = 215;
  useEffect(() => {
    const progressAmount = 500 / 2400;
    progress.value = withTiming(progressAmount, {duration: 500});
  }, [value]);

  const animatedProps = useAnimatedProps(() => {
    if (progress.value <= 1) {
      return {
        width: BAR_WIDTH * parseFloat(progress.value.toFixed(2)),
      };
    } else {
      return {width: BAR_WIDTH};
    }
  });

  const progressText = useDerivedValue(() => {
    return `${Math.floor(progress.value * 2400)}`;
  });

  return (
    <View
      style={{
        width: BAR_WIDTH,
        height: BAR_HEIGHT,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      {/* <View
        style={{
          position: 'absolute',
          top: BAR_WIDTH / 18,
          alignItems: 'center',
        }}> */}
      {/* <ReText
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
        </BoldText> */}
      {/* </View> */}
      <Svg
        width={BAR_WIDTH}
        height={BAR_HEIGHT}
        viewBox={`0 0 ${BAR_WIDTH} ${BAR_HEIGHT}`}>
        <Rect
          x="0"
          y="0"
          rx="5"
          // stroke={'rgba(236, 241, 243, 0.3)'}
          fill={'rgba(236, 241, 243, 0.3)'}
          width={BAR_WIDTH}
          height={BAR_HEIGHT}
        />
        <AnimatedRectangle
          x="0"
          y="0"
          rx="5"
          // stroke={'rgba(255, 255, 255, 1)'}
          fill={'rgba(255, 255, 255, 1)'}
          // width={BAR_WIDTH}
          height={BAR_HEIGHT}
          // strokeWidth={STROKE_WIDTH / 1.5}
          // strokeDasharray={50}
          animatedProps={animatedProps}
          strokeLinecap="round"
        />
      </Svg>
    </View>
  );
};

export default ProgressBar;
