import React from 'react';
import {View} from 'react-native';
import styles from './styles';
import {
  VictoryLine,
  VictoryChart,
  VictoryTheme,
  VictoryLabel,
} from 'victory-native';
import LineChart from '../common/LineChart';

const data = [
  {x: '1', y: 150},
  {x: '2', y: 178},
  {x: '3', y: 177},
  {x: '4', y: 189},
  {x: '5', y: 176},
  {x: '6', y: 180},
  {x: '7', y: 181},
  {x: '8', y: 183},
  {x: '9', y: 186},
  {x: '10', y: 183},
  {x: '11', y: 187},
  {x: '12', y: 188},
  {x: '13', y: 190},
  {x: '14', y: 185},
  {x: '15', y: 182},
  {x: '16', y: 184},
  {x: '17', y: 185},
  {x: '18', y: 187},
  {x: '19', y: 188},
  {x: '20', y: 184},
  {x: '21', y: 182},
];

const WeightLineChart = () => {
  return (
    <View style={styles.container}>
      <LineChart data={data} title="Weight">
        <VictoryLine
          name="weightGoal"
          style={{
            data: {stroke: 'grey', strokeWidth: 2, strokeDasharray: '5,5'},
          }}
          y={() => 180}
        />
      </LineChart>
    </View>
  );
};

export default WeightLineChart;
