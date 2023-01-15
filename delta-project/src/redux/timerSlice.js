import { createSlice } from "@reduxjs/toolkit";
import {
  POMODORO,
  LONG_BREAK,
  SHORT_BREAK,
} from "../constants";

const initialState = {
  mode: POMODORO,
  modes: {
    [POMODORO]: {
      id: POMODORO,
      label: "Pomodoro",
      time: 25,
    },
    [SHORT_BREAK]: {
      id: SHORT_BREAK,
      label: "Short Break",
      time: 0.05,
    },
    [LONG_BREAK]: {
      id: LONG_BREAK,
      label: "Long Break",
      time: 0.15,
    },
  },
};

export const timerSlice = createSlice({
  name: "timer",
  initialState,
  reducers: {
    setMode: (state, action) => {
      state.mode = action.payload;
    },
    updateModeTime: (state, action) => {
      const { mode, time } = action.payload;
      state.modes[mode].time = time;
    },
  },
});

export const {
  setMode,
  updateModeTime,
} = timerSlice.actions;

export default timerSlice.reducer;