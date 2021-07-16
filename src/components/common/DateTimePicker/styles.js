import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  wrapper: {
    height: 50,
    paddingHorizontal: 5,
    borderRadius: 5,
    justifyContent: 'space-evenly',

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
  text: {
    fontSize: 22,
    fontWeight: '500',
    color: 'black',
    marginLeft: 5,
  },
  btnText: {
    position: 'absolute',
    top: 0,
    height: 42,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnCancel: {
    left: 0,
  },
  btnDone: {
    right: 0,
  },
});
