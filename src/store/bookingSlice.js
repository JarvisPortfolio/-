import { createSlice } from "@reduxjs/toolkit";

export const bookingSlice = createSlice({
  name: "booking",
  initialState: {
    books: [],
  },
  reducers: {
    Booked: (state, action) => {
      state.books = action.payload;
    },
    clearBookings: (state) => {
      state.books = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const { Booked, clearBookings } = bookingSlice.actions;

export default bookingSlice.reducer;
