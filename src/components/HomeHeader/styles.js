import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  wrapper: {
    // borderBottomLeftRadius: 30,
    // borderBottomRightRadius: 30,
    // shadowColor: '#000',
    // shadowOffset: {
    //   width: 0,
    //   height: 4,
    // },
    // shadowOpacity: 0.32,
    // shadowRadius: 5.42,
    // elevation: 9,

    paddingBottom: 20,
    paddingHorizontal: 10,
  },
  macroDisplay: {
    flexDirection: 'row',
  },
  macroBarContainer: {
    justifyContent: 'center',
    flex: 1,
    paddingLeft: 10,
  },
  macroBar: {
    flexDirection: 'row',
    marginVertical: 8,
  },
  progressBarContainer: {
    flex: 3,
    justifyContent: 'center',
  },
  macroLabelContainer: {
    flex: 2,
  },
  macroLabel: {
    fontSize: 12,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  macroNumbersContainer: {
    flex: 2,
    marginRight: 5,
    marginLeft: 5,
  },
  macroNumbers: {
    alignSelf: 'center',
    fontSize: 12,
    fontWeight: '700',
    color: '#FFFFFF',

    letterSpacing: 1,
  },
});
