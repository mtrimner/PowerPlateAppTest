import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  wrapper: {
    paddingHorizontal: 5,
    marginTop: 5,
    borderRadius: 5,

    backgroundColor: '#ffffff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3,

    elevation: 6,
    flexDirection: 'row-reverse',
  },

  textInput: {
    flex: 1,
    width: '100%',
    height: 50,
    fontSize: 18,
  },
  error: {
    color: 'red',
    paddingTop: 4,
    fontSize: 12,
  },
  button: {
    borderColor: '#ECF1F3',
    borderRadius: 5,
    borderWidth: 5,
    width: width / 3,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'space-between',
  },
  stepTitle: {
    fontSize: 32,
    marginBottom: 30,
    color: '#ffffff',
  },
});
