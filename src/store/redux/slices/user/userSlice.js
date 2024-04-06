import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

export const initialState = {
  initialized: false,
  token: null,
  user: null,
  blockedModalVisible: false,
};

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;

      state.initialized = true;
    },
    setInitialized: (state, action) => {
      state.initialized = action.payload;
    },
    setUsername: (state, action) => {
      state.user = { ...state.user, name: action.payload };
    },
    setUserCoverImage: (state, action) => {
      state.user = { ...state.user, coverImage: action.payload };
    },
    setUserImage: (state, action) => {
      state.user = { ...state.user, image: action.payload };
    },
    setUserCoins: (state, action) => {
      state.user = { ...state.user, coins: action.payload };
    },
    resetUser: (state) => {
      state = initialState;
    },
    toggleBlockedModalVisibility: (state) => {
      state.blockedModalVisible = !state.blockedModalVisible;
    },
  },
});

export const {
  setInitialized,
  setUser,
  setUsername,
  setUserCoins,
  setUserImage,
  setUserCoverImage,
  resetUser,
  toggleBlockedModalVisibility,
} = userSlice.actions;

export const userReducer = userSlice.reducer;
