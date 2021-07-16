import React from 'react';
import {Text, View} from 'react-native';
import Card from '../../components/common/Card';
import Container from '../../components/common/Container';
import CustomButton from '../../components/common/CustomButton';
import ProgressBar from '../../components/common/ProgressBar';
import HomeHeader from '../../components/HomeHeader';
import MealCard from '../../components/MealCard';
import styles from './styles';

const Home = () => {
  return (
    <View style={{flex: 1}}>
      <HomeHeader />
      <MealCard />
      <CustomButton
        title="Add Meal"
        primary
        style={[styles.button, {marginHorizontal: 50}]}
      />
    </View>
  );
};

export default Home;
