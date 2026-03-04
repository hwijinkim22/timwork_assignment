import { configureStore } from "@reduxjs/toolkit";
import drawingSlice from "./slices/drawingSlice";

export const store = configureStore({
  reducer: {
    drawing: drawingSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
