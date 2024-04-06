import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ChallengesService } from "../../../../services/challengesService.js";

export const initializeChallengeLeaderboard = createAsyncThunk(
  "leaderboard/initializeChallengeLeaderboard",
  async (id, { dispatch, getState }) => {
    dispatch(setChallengeId(id));

    dispatch(fetchLeaderboard(0));
  }
);

export const fetchLeaderboard = createAsyncThunk(
  "leaderboard/fetchLeaderboard",
  async (page = 0, { dispatch, getState }) => {
    try {
      dispatch(setLoading(true));

      const { challengeId } = getState().leaderboard;

      const result = await ChallengesService.getLeaderBoard(challengeId, page);

      if (result.data) {
        const { scores, hasMore } = JSON.parse(result.data);

        dispatch(setPage(page));
        dispatch(setHasMore(hasMore));
        dispatch(setScores(scores));
      }
    } catch (error) {
      console.log("Error", error);
    } finally {
      dispatch(setLoading(false));
    }
  }
);

export const initialState = {
  challengeId: undefined,
  loading: true,
  scores: [],
  page: 0,
  hasMore: true,
};

const leaderboardSlice = createSlice({
  name: "leaderboardSlice",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setScores: (state, action) => {
      state.scores = action.payload;
    },
    setPage: (state, action) => {
      state.page = action.payload;
    },
    setHasMore: (state, action) => {
      state.hasMore = action.payload;
    },
    setChallengeId: (state, action) => {
      state.challengeId = action.payload;
    },
  },
});

export const {
  setLoading,
  setScores,
  setPage,
  setHasMore,
  setChallengeId,
  setCompetitionId,
} = leaderboardSlice.actions;

export const leaderboardReducer = leaderboardSlice.reducer;
