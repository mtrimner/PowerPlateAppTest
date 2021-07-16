import {StyleSheet} from 'react-native';
import {SLIDER_WIDTH} from './index';

// const SLIDER_WIDTH = 300;
const KNOB_WIDTH = 70;
// const MAX_RANGE = 20;

export default StyleSheet.create({
  slider: {
    // height: KNOB_WIDTH,
    // width: SLIDER_WIDTH,
    // borderRadius: KNOB_WIDTH / 2,
    backgroundColor: '#ddd',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
  progress: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#3f51b5',
    // borderRadius: KNOB_WIDTH / 2,
  },
  knob: {
    // height: KNOB_WIDTH,
    // width: KNOB_WIDTH,
    // borderRadius: KNOB_WIDTH / 2,
    backgroundColor: '#757de8',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
