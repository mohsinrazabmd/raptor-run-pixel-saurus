import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  socketIO: null,
};

export const socketSlice = createSlice({
  name: "socketIo",
  initialState: initialState,
  reducers: {
    setSocketInstance: (state, action) => {
      state.socketIO = action.payload;
    },
  },
});

export const { setSocketInstance } = socketSlice.actions;
export const socketReducer = socketSlice.reducer;
