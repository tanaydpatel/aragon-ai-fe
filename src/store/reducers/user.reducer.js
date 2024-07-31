import { createSlice } from '@reduxjs/toolkit';
import { USER } from '../slices';
import { LOCAL_STORAGE_KEYS } from '../../constants';

// Logged in user details
export const userSlice = createSlice({
  name: USER,
  initialState: { userId: null },
  reducers: {
    setUser: (__, action) => {
      localStorage.setItem(LOCAL_STORAGE_KEYS.USER_ID, action.payload);
      return { userId: action.payload };
    },
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
