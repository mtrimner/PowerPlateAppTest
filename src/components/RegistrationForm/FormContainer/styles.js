import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');
export default StyleSheet.create({
  screen: {
    width,
    height,
    justifyContent: 'center',
  },
  component: {
    paddingTop: 150,
    marginHorizontal: 25,
    flex: 1,
  },
  authButtons: {
    paddingTop: 150,
    marginHorizontal: 5,
    flex: 1,
  },
  loginComponent: {
    paddingTop: 60,
    marginHorizontal: 25,
    flex: 1,
  },
  stepTitle: {
    fontSize: 32,
    alignSelf: 'center',
    marginBottom: 30,
    color: '#ffffff',
  },
  buttons: {
    flexDirection: 'row',
    flex: 1,
    position: 'absolute',
    bottom: 45,
    width: '100%',
  },
  loginButton: {
    height: 50,
  },
  button1: {
    flex: 2,
  },
});
