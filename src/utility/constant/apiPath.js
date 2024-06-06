import env from "../../environment.js";
export const APIPath = {
  server: env.BACKEND_BASE_URL,
  moralisServer: "https://nbnob0befkpo.usemoralis.com:2053/server",
  signUp: "create-user",
  //admin google auth
  getUserAuthDetails: "auth-details",
  logoutGoogle: "logout-admin",

  //admin
  checkAdminAuth: "check-admin-auth",
  login: "login",
  logout: "blacklist-token",
  auth: "auth",
  updatePassword: "update-password",
  updateUsername: "update-username",

  //cmc
  priceConversion: "convert-price",

  getConfig: "get-config",

  createUser: "create-user",
  addUserReward: "update-reward",
  addUserProfile: "add-user-profile",
  getUserProfile: "get-user-profile",
  getProbabilityRatio: "get-probability-ratio",

  //Challenges

  liveChallenge: "live-challenge",
  challengeLeaderboard: "challenge-leaderboard",

  //Admin Challenges
  createChallenge: "create-challenge",
  upcomingChallenges: "upcoming-challenges",
  challengeWinners: "challenge-winners",
  allChallenges: "all-challenges",
};
