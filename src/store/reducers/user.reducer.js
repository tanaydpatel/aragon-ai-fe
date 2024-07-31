import { createSlice } from '@reduxjs/toolkit';
import { USER } from '../slices';

// Logged in user details
export const userSlice = createSlice({
  name: USER,
  initialState: { userId: null },
  reducers: {
    setUser: (__, action) => ({
      userId: action.payload,
    }),
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
