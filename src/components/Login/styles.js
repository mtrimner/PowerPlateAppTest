import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#ecf1f3',
    flex: 1,
  },
  title: {
    fontSize: 36,
    textAlign: 'center',
    marginTop: 65,
    marginBottom: 10,
  },
  or: {
    fontSize: 18,
    alignSelf: 'center',
    marginVertical: 25,
  },
  oAuthButtonContainer: {
    marginBottom: 10,
  },
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
  form: {
    paddingTop: 20,
    marginHorizontal: 25,
  },
  createSection: {
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 10,
  },
  linkButton: {
    fontSize: 18,
    paddingLeft: 10,
  },
  noAccountText: {
    fontSize: 18,
  },
  infoText: {
    fontSize: 25,
  },
  emailLoginButton: {
    marginTop: 20,
  },
  oAuthButtons: {
    marginBottom: 20,
  },
});
