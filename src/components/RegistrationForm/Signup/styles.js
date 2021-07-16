import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  input: {
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
  },
  title: {
    fontSize: 21,
    textAlign: 'center',
    paddingTop: 20,
    fontWeight: '700',
  },
  subTitle: {
    fontSize: 17,
    textAlign: 'center',
    paddingTop: 20,
    fontWeight: '500',
  },
  form: {
    paddingTop: 20,
  },
  createSection: {
    flexDirection: 'row',
  },
  loginButton: {
    marginTop: 25,
  },
});
