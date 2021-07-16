import React, {useEffect} from 'react';
import {View, Dimensions, Text, StyleSheet} from 'react-native';
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

const AnimatedCircle = Animated.createAnimatedComponent(Circle);
const SmallCircularProgressBar = ({
  circumference,
  stroke,
  labelTextStyle,
  emptyStrokeColor,
  filledStrokeColor,
  centerText,
  centerTextStyle,
}) => {
  const {width, height} = Dimensions.get('window');

  const CIRCLE_LENGTH = circumference ? circumference : width * 1.2;
  const R = CIRCLE_LENGTH / (2 * Math.PI);
  const STROKE_WIDTH = 8;
  const halfCircle = R + STROKE_WIDTH;

  const progress = useSharedValue(0);

  useEffect(() => {
    const progressAmount = 220 / 240;
    progress.value = withTiming(progressAmount, {duration: 500});
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
    return `${Math.floor(progress.value * 240)}`;
  });

  return (
    <View style={{alignItems: 'center'}}>
      <View
        style={{
          width: R * 2,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View
          style={{
            position: 'absolute',
            // top: CIRCLE_LENGTH / 18,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <BoldText
            style={[
              {
                fontSize: R / 1.2,
                color: 'rgba(256,256,256,0.9)',
              },
              centerTextStyle,
            ]}>
            {centerText}
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
            stroke={
              emptyStrokeColor ? emptyStrokeColor : 'rgba(236, 241, 243, 0.3)'
            }
            strokeWidth={STROKE_WIDTH}
          />
          <AnimatedCircle
            cx="50%"
            cy="50%"
            r={R}
            stroke={
              filledStrokeColor ? filledStrokeColor : 'rgba(255, 255, 255, 1)'
            }
            strokeWidth={STROKE_WIDTH / 1.5}
            strokeDasharray={CIRCLE_LENGTH}
            animatedProps={animatedProps}
            strokeLinecap={'round'}
          />
        </Svg>
      </View>
      <View
        style={{
          alignItems: 'center',

          flexDirection: 'row',
          marginTop: -3,
        }}>
        <ReText
          style={[
            {
              fontSize: R / 2,
              color: 'rgba(256,256,256,0.9)',
              fontFamily: 'Lato-Bold',
              paddingVertical: 0,
              paddingHorizontal: 0,
            },
            labelTextStyle,
          ]}
          text={progressText}
        />
        <BoldText
          style={[
            {
              fontSize: R / 2,
              color: 'rgba(256,256,256,0.9)',
            },
            labelTextStyle,
          ]}>
          / 240
        </BoldText>
      </View>
    </View>
  );
};

export default SmallCircularProgressBar;
