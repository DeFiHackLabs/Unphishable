import { create } from "zustand";
import { challengeService } from "../services/challengeService";

interface UserChallengesStatus {
  challenge_id?: number;
  title?: string;
  challenge_key?: string;
}

interface ChallengeInfo {
  id: number;
  title: string;
  challenge_key: string;
  difficulty: string;
  completion_count?: number;
  points?: number;
  contributor?: {
    name: string;
    avatar: string;
    x_url: string;
  };
}

interface ChallengeState {
  userChallengesStatus: UserChallengesStatus[] | null;
  currentChallengeInfo: ChallengeInfo | null;
  isLoading: boolean;
  error: Error | null;

  // 獲取使用者挑戰進度
  getUserChallengesStatus: () => Promise<void>;

  // 獲取特定挑戰的信息
  getChallengeInfo: (challengeKey: string) => Promise<void>;

  // 重置状态
  resetState: () => void;
}

export const useChallengeStore = create<ChallengeState>((set) => ({
  userChallengesStatus: null,
  currentChallengeInfo: null,
  isLoading: false,
  error: null,

  getUserChallengesStatus: async () => {
    console.log("Fetching user challenges status...");
    try {
      set({ isLoading: true, error: null });
      const data = await challengeService.getUserChallengesStatus();
      // console.log("User challenges status data:", data);
      set({
        userChallengesStatus: Array.isArray(data) ? data : null,
        isLoading: false,
      });
    } catch (error) {
      console.error("Failed to get user challenges status:", error);
      set({ error: error as Error, isLoading: false });
    }
  },

  getChallengeInfo: async (challengeKey: string) => {
    try {
      set({ isLoading: true, error: null });
      const data = await challengeService.getChallengesInfo(challengeKey);
      console.log("Challenge info data:", data);
      set({ currentChallengeInfo: data, isLoading: false });
    } catch (error) {
      console.error("Failed to get challenge info:", error);
      set({ error: error as Error, isLoading: false });
    }
  },

  resetState: () => {
    set({
      userChallengesStatus: null,
      currentChallengeInfo: null,
      isLoading: false,
      error: null,
    });
  },
}));
