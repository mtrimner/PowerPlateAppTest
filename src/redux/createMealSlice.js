import {createSlice} from '@reduxjs/toolkit';
import uuid from 'react-native-uuid';

const initialState = {
  foods: [],
  totalCalories: null,
  totalCarbs: null,
  totalProtein: null,
  totalFat: null,
};

const createMealSlice = createSlice({
  name: 'createMeal',
  initialState: initialState,
  reducers: {
    addFood: (state, action) => {
      const multiplier = action.payload.serving_weight_grams / 5;
      let calories;
      let protein;
      let carbs;
      let fat;

      action.payload.full_nutrients.forEach(macro => {
        if (macro.attr_id === 203) {
          protein = macro.value;
        }
        if (macro.attr_id === 205) {
          carbs = macro.value;
        }
        if (macro.attr_id === 204) {
          fat = macro.value;
        }
        if (macro.attr_id === 208) {
          calories = macro.value;
        }
      });

      state.foods.push({
        key: uuid.v1(),
        name: action.payload.food_name,
        baseCalories: calories / multiplier,
        calories: 0,
        baseProtein: protein / multiplier,
        protein: 0,
        baseCarbs: carbs / multiplier,
        carbs: 0,
        baseFat: fat / multiplier,
        fat: 0,
        grams: 0,
      });
    },
    deleteFood: (state, action) => {
      state.find;
    },
    updateFoodQuantity: (state, action) => {
      const multiplier = action.payload.grams / 5;
      const index = state.foods.findIndex(
        food => food.key === action.payload.id,
      );
      const newState = {...state, foods: [...state.foods]};
      newState.foods[index] = {
        key: state.foods[index].key,
        name: state.foods[index].name,
        calories: Math.ceil(state.foods[index].baseCalories * multiplier),
        baseCalories: state.foods[index].baseCalories,
        protein: Math.ceil(state.foods[index].baseProtein * multiplier),
        baseProtein: state.foods[index].baseProtein,
        carbs: Math.ceil(state.foods[index].baseCarbs * multiplier),
        baseCarbs: state.foods[index].baseCarbs,
        fat: Math.ceil(state.foods[index].baseFat * multiplier),
        baseFat: state.foods[index].baseFat,
        grams: action.payload.grams,
      };
      newState.totalCalories = newState.foods
        .map(food => food.calories)
        .reduce((prev, next) => prev + next);
      newState.totalCarbs = newState.foods
        .map(food => food.carbs)
        .reduce((prev, next) => prev + next);
      newState.totalProtein = newState.foods
        .map(food => food.protein)
        .reduce((prev, next) => prev + next);
      newState.totalFat = newState.foods
        .map(food => food.fat)
        .reduce((prev, next) => prev + next);
      return newState;
    },
  },
});

const {actions, reducer} = createMealSlice;

export const {addFood, deleteFood, updateFoodQuantity} = actions;

export default reducer;
