import { createSlice } from "@reduxjs/toolkit";
import { RootState } from ".";

export type CountState = {
  count: Number;
};

const slice = createSlice({
  name: "counter",
  initialState: {
    count: 0,
  },
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    reset: (state) => {
      state.count = 0;
    },
    incrementByAmount: (state, action) => {
      state.count = action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount, reset } = slice.actions;

export const selectCount = ({ counter }: RootState) => counter.count;

export default slice.reducer;
