import { create } from "zustand";
import { leaderboardService } from "@/app/services/leaderboardService";

export interface LeaderboardUser {
  //id: number;
  //rank: number;
  nickname: string;
  //title: string;
  //level: number;
  total_score: number;
  //trend: "up" | "down" | "stable";
  photo_url: string;
}

interface LeaderboardState {
  leaderboard: LeaderboardUser[];
  isLoading: boolean;
  error: string | null;
  fetchLeaderboard: () => Promise<void>;
}

export const useLeaderboardStore = create<LeaderboardState>((set) => ({
  leaderboard: [],
  isLoading: false,
  error: null,
  fetchLeaderboard: async () => {
    set({ isLoading: true });
    try {
      const response = await leaderboardService.getLeaderboard();
      // 轉換資料格式
      const transformedData: LeaderboardUser[] = response.map((entry) => ({
        ...entry, // 保留原有的屬性
      }));
      console.log("Fetched leaderboard data:", response);
      set({ leaderboard: transformedData, isLoading: false, error: null });
    } catch (err) {
      set({
        error:
          err instanceof Error ? err.message : "Failed to fetch leaderboard",
        isLoading: false,
      });
    }
  },
}));
