import React from 'react';
import {StyleSheet, View, Dimensions} from 'react-native';
import {
  VictoryLine,
  VictoryChart,
  VictoryLabel,
  VictoryAxis,
  VictoryTooltip,
  VictoryGroup,
  VictoryVoronoiContainer,
  VictoryScatter,
  VictoryLegend,
} from 'victory-native';

const LineChart = ({data, style, children, title}) => {
  const width = Dimensions.get('window').width;
  return (
    <VictoryChart
      containerComponent={
        <VictoryVoronoiContainer voronoiBlacklist={['weightGoal']} />
      }
      renderInPortal={false}>
      <VictoryGroup data={data} renderInPortal={false}>
        <VictoryAxis tickCount={8} />
        <VictoryAxis dependentAxis tickCount={8} />
        <VictoryLine interpolation="catmullRom" style={style} />
        <VictoryScatter
          labelComponent={<VictoryTooltip renderInPortal={false} />}
          labels={({datum}) => datum.y}
          style={{data: {fill: '#c43a31'}}}
          size={({active}) => (active ? 5 : 3)}
        />
      </VictoryGroup>
      {children}
    </VictoryChart>
  );
};

export default LineChart;
