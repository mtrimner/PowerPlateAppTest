import React, {useState, useEffect, useCallback, useMemo} from 'react';
import {Text, View, FlatList} from 'react-native';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import AddMealHeader from '../../components/AddMealHeader';
import FoodCard from '../../components/FoodCard';
import CustomButton from '../../components/common/CustomButton';
import {FOOD_SEARCH} from '../../constants/routeNames';
import Slider from '../../components/slider/Slider';

const AddMeal = ({route}) => {
  // const [foodName, setFoodName] = useState([]);
  const [cals, setCals] = useState('');
  const foods = useSelector(state => state.createMeal);

  const {navigate} = useNavigation();
  // const foodResults = route.params;
  // useEffect(() => {
  //   if (foodResults) {
  //     setFoodName(foodName.concat(foodResults.branded[0].brand_name));
  //   }
  // }, [route]);

  const getNumbers = number => {
    setCals(number);
  };

  return (
    <>
      <AddMealHeader />
      <FlatList
        data={foods.foods}
        renderItem={({item}) => {
          return (
            <FoodCard foodName={item.name} amount={item.grams} id={item.key} />
          );
        }}
      />
      <CustomButton
        title="Add Food"
        primary
        style={{marginHorizontal: 60}}
        onPress={() => {
          navigate(FOOD_SEARCH);
        }}
      />
    </>
  );
};

export default AddMeal;