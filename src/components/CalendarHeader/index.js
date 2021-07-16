import React, {useState, useMemo} from 'react';
import {Text, View, Button, Pressable, TouchableOpacity} from 'react-native';
import styles from './styles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import RegularText from '../common/text/RegularText';
import CustomButton from '../common/CustomButton';

const CalendarHeader = () => {
  const [activeDate, setActiveDate] = useState(new Date());

  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const changeDay = n => {
    const currentDate = activeDate;
    setActiveDate(new Date(currentDate.setDate(currentDate.getDate() + n)));
  };

  return (
    <View style={styles.container} >
      <Pressable
        onPress={() => changeDay(-1)}
        hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}
        >
        <MaterialIcons name="keyboard-arrow-left" color="white" size={26} />
      </Pressable>

      <View style={{marginHorizontal: 10}}>
        <RegularText style={styles.text}>
          {weekDays[activeDate.getDay()]}, {months[activeDate.getMonth()]}{' '}
          {activeDate.getDate()}, {activeDate.getFullYear()}
        </RegularText>
      </View>
      <Pressable
        onPress={() => changeDay(1)}
        hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}>
        <MaterialIcons name="keyboard-arrow-right" color="white" size={26} />
      </Pressable>
    </View>
  );
};

export default CalendarHeader;
