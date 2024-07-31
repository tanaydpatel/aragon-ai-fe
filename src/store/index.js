import { configureStore } from '@reduxjs/toolkit';

import userReducer from './reducers/user.reducer';
import boardReducer from './reducers/board.reducer.js';

const store = configureStore({
  reducer: {
    user: userReducer,
    board: boardReducer,
  },
});

export default store;
