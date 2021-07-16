import React, {useState, useMemo} from 'react';
import {Text, View, Button} from 'react-native';

const Calender = () => {
  const [activeDate, setActiveDate] = useState(new Date());
  console.log(activeDate);
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

  const nDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  const month = activeDate.getMonth();

  const year = activeDate.getFullYear();
  const firstDay = new Date(year, month, 1).getDay();

  const generateMatrix = () => {
    const matrix = [];
    matrix[0] = weekDays;

    let maxDays = nDays[month];
    if (month == 1) {
      if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
        maxDays += 1;
      }
    }

    let counter = 1;
    for (let row = 1; row < 7; row++) {
      matrix[row] = [];
      for (let col = 0; col < 7; col++) {
        matrix[row][col] = -1;
        if (row == 1 && col >= firstDay) {
          matrix[row][col] = counter++;
        } else if (row > 1 && counter <= maxDays) {
          matrix[row][col] = counter++;
        }
      }
    }
    return matrix;
  };

  const onPress = item => {
    if (!item.match && item != -1) {
      setActiveDate(new Date(activeDate.setDate(item)));
    }
  };

  const changeMonth = n => {
    setActiveDate(new Date(activeDate.setMonth(activeDate.getMonth() + n)));
  };

  const matrix = generateMatrix();

  let rows = [];
  rows = matrix.map((row, rowIndex) => {
    const rowItems = row.map((item, colIndex) => {
      return (
        <Text
          key={colIndex}
          style={{
            flex: 1,
            height: 18,
            textAlign: 'center',
            backgroundColor: rowIndex == 0 ? '#ddd' : '#fff',
            color: colIndex == 0 ? '#a00' : '#000',
            fontWeight: item == activeDate.getDate() ? 'bold' : 'normal',
          }}
          onPress={() => onPress(item)}>
          {item != -1 ? item : ''}
        </Text>
      );
    });
    return (
      <View
        key={rowIndex}
        style={{
          flex: 1,
          flexDirection: 'row',
          padding: 15,
          justifyContent: 'space-around',
          alignItems: 'center',
        }}>
        {rowItems}
      </View>
    );
  });

  return (
    <View>
      <Text
        style={{
          fontWeight: 'bold',
          fontSize: 18,
          textAlign: 'center',
          paddingTop: 50,
        }}>
        {months[activeDate.getMonth()]}
        {activeDate.getFullYear()}
      </Text>
      {/* {rows} */}
      <Button
        title="Previous"
        onPress={() => {
          changeMonth(-1);
        }}
      />
      <Button title="Next" onPress={() => changeMonth(+1)} />
    </View>
  );
};

export default Calender;
