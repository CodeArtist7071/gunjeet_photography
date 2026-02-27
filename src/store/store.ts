import { configureStore } from "@reduxjs/toolkit";
import driveReducer from "./slice/driveSlice"
export const store = configureStore({
  reducer: {
    drive:driveReducer
  }
})
// Types for use in components
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;