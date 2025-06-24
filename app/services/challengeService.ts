import { BaseApiService, ApiResponse } from "./baseApiService";
import { createAuthorizedRequest } from "./apiService";
import { API_CHALLENGE } from "@/app/constants/apis/api_challenge";
import { API_USER } from "@/app/constants/apis/api_user";

interface ChallengeData {
  success: boolean;
  error?: string;
}

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

class ChallengeService extends BaseApiService {
  private static instance: ChallengeService;

  private constructor() {
    super();
  }

  public static getInstance(): ChallengeService {
    if (!ChallengeService.instance) {
      ChallengeService.instance = new ChallengeService();
    }
    return ChallengeService.instance;
  }

  // 每次請求時獲取新的 authorizedApi，確保使用最新 token
  private getAuthorizedApi() {
    return createAuthorizedRequest();
  }

  public async submitChallenge(challengeKey: string): Promise<ChallengeData> {
    try {
      // const wallet_address = localStorage.getItem("setAddress");

      // if (!wallet_address) {
      //   throw new Error("Wallet address not found");
      // }
      // console.log("wallet_address", wallet_address);
      const authorizedApi = this.getAuthorizedApi();
      const response = await authorizedApi
        .post(API_CHALLENGE.submitChallenge, {
          json: { challenge_key: challengeKey },
        })
        .json<ApiResponse<ChallengeData>>();

      return response;
    } catch (error) {
      console.error("Submit challenge error:", error);
      return {
        success: false,
        error:
          error instanceof Error ? error.message : "Unknown error occurred",
      };
    }
  }

  public async getUserChallengesStatus(): Promise<UserChallengesStatus> {
    try {
      const authorizedApi = this.getAuthorizedApi();

      const response = await authorizedApi
        .get(API_USER.getUserChallengesStatus)
        .json<ApiResponse<UserChallengesStatus>>();
      console.log("getUserChallengesStatus", response);
      return response.data;
    } catch (error) {
      console.error("Get user challenges status error:", error);
      throw error;
    }
  }

  public async getChallengesInfo(challengeKey: string): Promise<ChallengeInfo> {
    try {
      const authorizedApi = this.getAuthorizedApi();
      const response = await authorizedApi
        .get(API_CHALLENGE.getChallengesInfo(challengeKey))
        .json<ApiResponse<ChallengeInfo>>();

      return response.data;
    } catch (error) {
      console.error("Get challenges info error:", error);
      throw error;
    }
  }
}

export const challengeService = ChallengeService.getInstance();
