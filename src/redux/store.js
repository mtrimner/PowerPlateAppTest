import {configureStore} from '@reduxjs/toolkit';
import authReducer from './authSlice';
import dietReducer from './dietSlice';
import createMealReducer from './createMealSlice';
import mealsReducer from './mealsSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    diet: dietReducer,
    createMeal: createMealReducer,
    meals: mealsReducer,
  },
});

export default store;
