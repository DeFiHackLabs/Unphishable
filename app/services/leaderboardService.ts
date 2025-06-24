import { BaseApiService, ApiResponse } from "./baseApiService";
import { createAuthorizedRequest } from "./apiService";
import ky from "ky";

interface LeaderboardEntry {
  nickname: string;
  total_score: number;
  photo_url: string;
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

  public async getLeaderboard(): Promise<LeaderboardEntry[]> {
    try {
      const authorizedApi = this.getAuthorizedApi();
      const response = await authorizedApi
        .get("/api/leaderboard")
        .json<ApiResponse<LeaderboardEntry[]>>();

      if (!response.success || !response.data) {
        throw new Error("Failed to fetch leaderboard data");
      }

      return response.data;
    } catch (error) {
      console.error("Error fetching leaderboard:", error);
      throw error;
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
