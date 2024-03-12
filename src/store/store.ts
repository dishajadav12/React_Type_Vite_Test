import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./app.slice";

export const store = configureStore({
  reducer: {
    appSlice: appSlice,
  },
});

export type Rootstate = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
