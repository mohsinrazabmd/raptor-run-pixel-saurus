import { combineReducers } from "redux";

// Web3 Connect
import { web3Reducer } from "./slices/wallet3Connect/web3ConnectSlice";
import { modelReducer } from "./slices/helperSlices/modelSlice";

//user
import { userReducer } from "./slices/user/userSlice";
import { socketReducer } from "./slices/socket/socketSlice";
import { leaderboardReducer } from "./slices/leaderBoard/leaderBoardSlice";

const parentReducer = combineReducers({
  socketIo: socketReducer,
  user: userReducer,
  web3Connect: web3Reducer,
  model: modelReducer,
  leaderboard: leaderboardReducer,
});

export default parentReducer;
