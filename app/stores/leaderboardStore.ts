import { create } from "zustand";
import { leaderboardService } from "@/app/services/leaderboardService";

interface leaderboardReturnResult {
  scores: {
    nickname: string;
    total_score: number;
    photo_url: string;
    user_rank: number;
  }[];
  total_count: number;
  current_page: number;
}

export interface LeaderboardUser {
  //id: number;
  //rank: number;
  nickname: string;
  //title: string;
  //level: number;
  total_score: number;
  //trend: "up" | "down" | "stable";
  photo_url: string;
  user_rank: number;
}

interface LeaderboardState {
  leaderboard: LeaderboardUser[];
  totalCount?: number; // 可選屬性，根據需要添加
  currentPage?: number; // 可選屬性，根據需要添加
  isLoading: boolean;
  error: string | null;
  fetchLeaderboard: (page: number) => Promise<void>;
}

export const useLeaderboardStore = create<LeaderboardState>((set) => ({
  leaderboard: [],
  isLoading: false,
  error: null,
  fetchLeaderboard: async (page: number = 1) => {
    set({ isLoading: true });
    try {
      const response = await leaderboardService.getLeaderboard(page);
      console.log("Response from leaderboardService:", response);
      // 轉換資料格式
      const transformedData: leaderboardReturnResult = {
        scores: response.scores,
        total_count: response.total_count,
        current_page: response.current_page,
      };
      console.log("Fetched leaderboard data:", response);
      const leaderboardUsers: LeaderboardUser[] = transformedData.scores.map(
        (score) => ({
          nickname: score.nickname,
          total_score: score.total_score,
          photo_url: score.photo_url,
          user_rank: score.user_rank, // 假設 API 返回的分數物件中有 user_rank
        })
      );

      set({
        leaderboard: leaderboardUsers,
        totalCount: transformedData.total_count,
        currentPage: transformedData.current_page,
        isLoading: false,
        error: null,
      });
    } catch (err) {
      set({
        error:
          err instanceof Error ? err.message : "Failed to fetch leaderboard",
        isLoading: false,
      });
    }
  },
}));
