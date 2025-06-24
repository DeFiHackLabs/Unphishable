export const API_CHALLENGE = {
  getChallenges: "/api/challenges",
  getChallengesInfo: (challengeKey: string) =>
    `/api/challenge/info/${challengeKey}`,
  getUserScores: "/api/scores/:wallet_address",
  submitChallenge: "/api/submit",
  getLeaderboard: "/api/leaderboard",
};
