import {
  createSlice,
  createEntityAdapter,
  createAsyncThunk,
} from '@reduxjs/toolkit';
import uuid from 'react-native-uuid';

const fetchComments = createAsyncThunk('meals/fetchMeals', async () => {});

const mealsSlice = createSlice({
  name: 'meals',
  initialState: {},
  reducers: {},
  extraReducers: {},
});

const {actions, reducer} = mealsSlice;

export const {} = actions;

export default reducer;
