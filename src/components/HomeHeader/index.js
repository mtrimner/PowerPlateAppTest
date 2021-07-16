import React from 'react';
import {Text, View, Platform, SafeAreaView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import CircularProgressBar from '../CircularProgressBar';
import ProgressBar from '../common/ProgressBar';
import BoldText from '../common/text/BoldText';
import RegularText from '../common/text/RegularText';
import styles from './styles';
import CalendarStrip from 'react-native-calendar-strip';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

import CalendarHeader from '../CalendarHeader';

const HomeHeader = () => {
  return (
    <LinearGradient
      style={styles.wrapper}
      colors={['rgba(60, 146, 215, 0.8)', 'rgba(60, 146, 215, 1)']}>
        <SafeAreaView>
      <View style={styles.calendarHeader}>
        <CalendarHeader />
      </View>
      <View style={styles.macroDisplay}>
        <View>
          <CircularProgressBar />
        </View>
        <View style={styles.macroBarContainer}>
          <View style={styles.macroBar}>
            <View style={styles.macroLabelContainer}>
              <RegularText style={styles.macroLabel}>CARBS</RegularText>
            </View>
            <View style={styles.progressBarContainer}>
              <ProgressBar />
            </View>
            <View style={styles.macroNumbersContainer}>
              <RegularText style={styles.macroNumbers}>20/100</RegularText>
            </View>
          </View>
          <View style={styles.macroBar}>
            <View style={styles.macroLabelContainer}>
              <RegularText style={styles.macroLabel}>FAT</RegularText>
            </View>
            <View style={styles.progressBarContainer}>
              <ProgressBar />
            </View>
            <View style={styles.macroNumbersContainer}>
              <Text style={styles.macroNumbers}>120/200</Text>
            </View>
          </View>
          <View style={styles.macroBar}>
            <View style={styles.macroLabelContainer}>
              <RegularText style={styles.macroLabel}>PROTEIN</RegularText>
            </View>
            <View style={styles.progressBarContainer}>
              <ProgressBar />
            </View>
            <View style={styles.macroNumbersContainer}>
              <RegularText style={styles.macroNumbers}>170/300</RegularText>
            </View>
          </View>
        </View>
      </View>
      </SafeAreaView> 
    </LinearGradient>
  );
};

export default HomeHeader;
