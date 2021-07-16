import React from 'react';
import {View, Pressable} from 'react-native';
import styles from '../MealCard/styles';
import {useNavigation} from '@react-navigation/native';
import Card from '../common/Card';
import BoldText from '../common/text/BoldText';
import HeavyText from '../common/text/HeavyText';
import RegularText from '../common/text/RegularText';
import ProgressBar from '../common/ProgressBar';
import {ADD_MEAL} from '../../constants/routeNames';
import SmallCircularProgressBar from '../SmallCircularProgressBar';
import CustomButton from '../common/CustomButton';

const MealCard = ({children, style}) => {
  const {navigate} = useNavigation();
  return (
    <Pressable
      onPress={() => {
        navigate(ADD_MEAL);
      }}>
      <Card style={styles.card}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={{flex: 1}}>
            <HeavyText style={styles.mealLabel}>Meal 1</HeavyText>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              flex: 1,
              paddingTop: 5,
            }}>
            <SmallCircularProgressBar
              circumference={150}
              emptyStrokeColor="rgba(139,168,184,0.2)"
              filledStrokeColor="rgba(139,168,184,1)"
              labelTextStyle={{color: 'rgba(139,168,184,1)'}}
              centerTextStyle={{color: 'rgba(139,168,184,1)'}}
              centerText="C"
            />
            <SmallCircularProgressBar
              circumference={150}
              emptyStrokeColor="rgba(139,168,184,0.2)"
              filledStrokeColor="rgba(139,168,184,1)"
              labelTextStyle={{color: 'rgba(139,168,184,1)'}}
              centerTextStyle={{color: 'rgba(139,168,184,1)'}}
              centerText="F"
            />
            <SmallCircularProgressBar
              circumference={150}
              emptyStrokeColor="rgba(139,168,184,0.2)"
              filledStrokeColor="rgba(139,168,184,1)"
              labelTextStyle={{color: 'rgba(139,168,184,1)'}}
              centerTextStyle={{color: 'rgba(139,168,184,1)'}}
              centerText="P"
            />
          </View>
        </View>
        <View
          style={{
            paddingLeft: 220,
            paddingRight: 15,
            paddingVertical: 15,
          }}>
          <CustomButton
            textStyle={{color: 'rgba(139,168,184,1)', fontSize: 18}}
            style={styles.addFoodButton}
            title="+ Add Food"
          />
        </View>
      </Card>
    </Pressable>
  );
};

export default MealCard;