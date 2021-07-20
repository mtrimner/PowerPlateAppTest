import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  card: {
    marginTop: 20,
    marginHorizontal: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    // alignItems: 'center',
    marginBottom: 10,
  },
  textInput: {
    borderWidth: 4,
    borderBottomWidth: 4,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  foodName: {
    marginLeft: 15,
    marginVertical: 10,
    fontSize: 16,
  },
  macroLabel: {
    fontSize: 14,
    color: 'rgba(0, 0, 0, 0.8)',
  },
  macroAnimatedNumber: {
    fontFamily: 'Lato-Black',
    fontSize: 18,
    alignSelf: 'center',
  },
});
