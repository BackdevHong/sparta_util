import { configureStore } from "@reduxjs/toolkit";
import timeArray from "./timeArray";

export type RootState = ReturnType<typeof store.getState>;

const store = configureStore({
  reducer: {
    timeArray: timeArray.reducer,
  },
});

export default store;
