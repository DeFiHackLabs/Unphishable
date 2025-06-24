export const API_USER = {
  login: `/api/user/login`,
  uploadAvatar: `/api/user/avatar`,
  updateNickname: `/api/user/nickname`,
  getUserChallengesStatus: `/api/user/challenge/status`,
  getUser: (walletAddress: string) => `/api/user/${walletAddress}`,
  getUserInfo: (walletAddress: string) => `/api/user/info/${walletAddress}`,
};
