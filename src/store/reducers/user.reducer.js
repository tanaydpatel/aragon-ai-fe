import { createSlice } from '@reduxjs/toolkit';
import { USER } from '../slices';

// Logged in user details
export const userSlice = createSlice({
  name: USER,
  initialState: null,
  reducers: {
    setUser: (__, action) => action.payload,
    logoutUser: () => null,
  },
});

export const { setUser, logoutUser } = userSlice.actions;

export default userSlice.reducer;
