import { configureStore, createAction } from "@reduxjs/toolkit";
import { combineReducers, Reducer } from "redux";
import { default as counterReducer } from "./counter-slice";

const combinedReducers = combineReducers({
  counter: counterReducer,
});

export type RootState = ReturnType<typeof combinedReducers>;

export const clear = createAction("root/clear");

export const rootReducer: Reducer<RootState> = (state, action) => {
  return combinedReducers(state, action);
};

export const store = configureStore({
  reducer: rootReducer,
});

export const version = 1;
