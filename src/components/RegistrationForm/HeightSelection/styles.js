import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');
export default StyleSheet.create({
  stepTitle: {
    fontSize: 32,
    marginBottom: 30,
    color: '#ffffff',
  },
  error: {
    color: 'red',
    paddingTop: 4,
    fontSize: 12,
  },
  button: {
    borderColor: '#ECF1F3',
    borderRadius: 7,
    borderWidth: 5,
    width: width / 3,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
});
