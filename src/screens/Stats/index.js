import React from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';
import Calender from '../../components/Calender';
import Container from '../../components/common/Container';
import WeightLineChart from '../../components/WeightLineChart';

const Stats = () => {
  return (
    <ScrollView>
      <WeightLineChart />
      {/* <Calender /> */}
    </ScrollView>
  );
};

export default Stats;
