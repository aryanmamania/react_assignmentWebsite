import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  phoneNumber: '', 
};

const AuthSlice = createSlice({
  name: 'phoneNumber',
  initialState,
  reducers: {
    setPhoneNumber: (state, action) => {
      state.phoneNumber = action.payload;
      console.log(state)
      console.log(action)
    },
  },
});

export const { setPhoneNumber } = AuthSlice.actions;

export default AuthSlice.reducer;
