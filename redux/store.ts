import { configureStore } from "@reduxjs/toolkit";
import startupReducer from "@/redux/slices/startupSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      startup: startupReducer,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;

export type RootState = ReturnType<AppStore["getState"]>;

export type AppDispatch = AppStore["dispatch"];
