import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface DashboardState {
  role: "student" | "instructor" | "admin";
}
const initialState: DashboardState = {
  role: "student",
};

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    setRole: (state, action: PayloadAction<DashboardState["role"]>) => {
      state.role = action.payload;
    },
  },
});
export const { setRole } = dashboardSlice.actions;
export default dashboardSlice.reducer;
