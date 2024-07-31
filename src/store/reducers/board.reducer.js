import { createSlice } from '@reduxjs/toolkit';
import { BOARD } from '../slices';

// Logged in user details
export const boardSlice = createSlice({
  name: BOARD,
  initialState: null,
  reducers: {
    setBoard: (__, action) => action.payload,
  },
});

export const { setBoard } = boardSlice.actions;

export default boardSlice.reducer;
