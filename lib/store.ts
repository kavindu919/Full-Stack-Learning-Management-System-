import { configureStore } from "@reduxjs/toolkit";
import dashboardReducer from "./slice/dashboardSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      dashboard: dashboardReducer,
    },
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
