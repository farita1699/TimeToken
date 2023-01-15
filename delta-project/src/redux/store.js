import { configureStore } from "@reduxjs/toolkit";
import timerReducer from "./timerSlice";
import userReducer from './userSlice';

const store = configureStore({
  reducer: {
    timer: timerReducer,
    user: userReducer,
  },
});

export default store;