import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    token: null,
    user: null
  },
  reducers: {
    userToken: (state, action) => {
      state.token = action.payload;
    },
    userLogout: (state) => {
      state.token = null;
      state.user = null
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { userToken, userLogout, setUser } = userSlice.actions;

export default userSlice.reducer;
