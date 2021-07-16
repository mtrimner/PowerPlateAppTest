import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  isSignedIn: null,
  userId: null,
  name: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {},
});

export default authSlice.reducer;
