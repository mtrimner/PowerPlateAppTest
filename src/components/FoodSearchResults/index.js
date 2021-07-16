import React from 'react';
import {View, Pressable, FlatList, Image} from 'react-native';
import {useDispatch} from 'react-redux';
import {addFood} from '../../redux/createMealSlice';
import BoldText from '../common/text/BoldText';
import {useNavigation} from '@react-navigation/native';
import {ADD_MEAL} from '../../constants/routeNames';

const FoodSearchResults = ({foodResults}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  return (
    <View>
      <FlatList
        keyExtractor={food => food.food_name}
        data={foodResults.common}
        renderItem={({item}) => {
          const foodItem =
            item.food_name.charAt(0).toUpperCase() + item.food_name.slice(1);
          return (
            <Pressable
              onPress={() => {
                dispatch(addFood(item));
                navigation.navigate(ADD_MEAL, foodResults);
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  paddingBottom: 15,
                }}>
                <Image
                  style={{
                    width: 50,
                    height: 50,
                    marginHorizontal: 20,
                    borderWidth: 2,
                    borderColor: 'blue',
                    borderRadius: 10,
                  }}
                  source={{uri: item.photo.thumb}}
                />
                <BoldText style={{color: 'white'}}>{foodItem}</BoldText>
              </View>
            </Pressable>
          );
        }}
      />
    </View>
  );
};

export default FoodSearchResults;
