import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import timeArray from "./timeArray";

export type RootState = ReturnType<typeof store.getState>;

const store = configureStore({
  reducer: {
    timeArray: timeArray.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
