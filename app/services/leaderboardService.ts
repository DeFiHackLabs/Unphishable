import { BaseApiService, ApiResponse } from "./baseApiService";
import { createAuthorizedRequest } from "./apiService";
import ky from "ky";

interface LeaderboardEntry {
  scores: {
    nickname: string;
    total_score: number;
    photo_url: string;
    user_rank: number;
  }[];
  total_count: number;
  current_page: number;
}

export class LeaderboardService extends BaseApiService {
  private static instance: LeaderboardService;
  private authorizedApi: typeof ky;

  private constructor() {
    super();
    this.authorizedApi = createAuthorizedRequest();
  }

  public static getInstance(): LeaderboardService {
    if (!LeaderboardService.instance) {
      LeaderboardService.instance = new LeaderboardService();
    }
    return LeaderboardService.instance;
  }

  private getAuthorizedApi() {
    return createAuthorizedRequest();
  }

  public async getLeaderboard(page: number): Promise<LeaderboardEntry> {
    try {
      const authorizedApi = this.getAuthorizedApi();
      const response = await authorizedApi
        .get(`/api/leaderboard?page=${page}`)
        .json<ApiResponse<LeaderboardEntry>>();

      // 如果 API 請求不成功，或成功但後端標示為失敗，都回傳空陣列
      if (!response.success) {
        console.warn("API request for leaderboard was not successful.");
        return {
          scores: [],
          total_count: 0,
          current_page: 0,
        };
      }

      // 如果 data 為 null (沒有資料)，也回傳空陣列
      return response.data;
    } catch (error) {
      // 捕獲網路錯誤或 JSON 解析錯誤
      console.error("Error fetching leaderboard:", error);
      // 回傳空陣列以確保 UI 不會因此崩潰
      return {
        scores: [],
        total_count: 0,
        current_page: 0,
      };
    }
  }

  public async getUserRank(
    walletAddress: string
  ): Promise<LeaderboardEntry | null> {
    try {
      const authorizedApi = this.getAuthorizedApi();
      const response = await authorizedApi
        .get(`/api/leaderboard/rank/${walletAddress}`)
        .json<ApiResponse<LeaderboardEntry>>();

      if (!response.success || !response.data) {
        throw new Error("Failed to fetch user rank");
      }

      return response.data;
    } catch (error) {
      console.error("Error fetching user rank:", error);
      return null;
    }
  }

  // 當 token 更新時重新初始化 authorizedApi
  public refreshAuthorization(): void {
    this.authorizedApi = createAuthorizedRequest();
  }
}

export const leaderboardService = LeaderboardService.getInstance();
