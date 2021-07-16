import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  goal: null,
  startDate: null,
  endDate: null,
  bodyType: null,
  setMealsPerDay: null,
  currentWeight: null,
  numberOfMeals: null,
  targetWeight: null,
};

const dietSlice = createSlice({
  name: 'diet',
  initialState: initialState,
  reducers: {
    getDietData: (state, action) => {
      state.getData;
    },
  },
});

export default dietSlice.reducer;
