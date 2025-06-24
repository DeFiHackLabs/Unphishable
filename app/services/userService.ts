import { API_USER } from "../constants/apis/api_user";
import { BaseApiService, ApiResponse } from "./baseApiService";
import { createAuthorizedRequest } from "./apiService";
import ky from "ky";

interface UserProfile {
  id?: number;
  wallet_address?: string;
  signature?: string;
  created_at?: string;
  photo_url?: string;
  nickname?: string;
  has_completed_challenge1?: boolean;
}

interface UserInfo {
  total_score?: number;
  completion_count?: number;
  rank?: number;
}

interface LoginResponse {
  token: string;
  message: string;
}

export class UserService extends BaseApiService {
  private static instance: UserService;
  private authorizedApi: typeof ky;

  private constructor() {
    super();
    this.authorizedApi = createAuthorizedRequest();
  }

  public static getInstance(): UserService {
    if (!UserService.instance) {
      UserService.instance = new UserService();
    }
    return UserService.instance;
  }

  private getAuthorizedApi() {
    return createAuthorizedRequest();
  }

  public async login(walletAddress: string): Promise<LoginResponse> {
    try {
      const authorizedApi = this.getAuthorizedApi();
      const response = await authorizedApi
        .post(API_USER.login, {
          json: {
            walletAddress,
          },
        })
        .json<ApiResponse<LoginResponse>>();
      console.log("Login response:", response);
      if (!response.success || !response.data) {
        throw new Error(response.message || "登入失敗");
      }

      // 登入成功後，更新 authorizedApi 實例
      localStorage.setItem("token", response.data.token);
      this.refreshAuthorization();

      return response.data;
    } catch (error) {
      console.error("Login error:", error);
      throw error;
    }
  }

  public async getUser(walletAddress: string): Promise<UserProfile> {
    try {
      const authorizedApi = this.getAuthorizedApi();
      const response = await authorizedApi
        .get(API_USER.getUser(walletAddress))
        .json<ApiResponse<UserProfile>>();

      if (!response.success || !response.data) {
        throw new Error("Failed to fetch user profile");
      }

      return response.data;
    } catch (error) {
      // 檢查是否為 401 錯誤
      if (error instanceof Error && "response" in error) {
        const response = error.response;
        console.error("Response status:", response);
      }

      console.error("Error fetching user profile:", error);
      throw error;
    }
  }

  public async gitUserInfo(walletAddress: string): Promise<UserInfo | null> {
    try {
      const response = await this.authorizedApi
        .get(API_USER.getUserInfo(walletAddress))
        .json<ApiResponse<UserInfo>>();
      if (!response.success) {
        throw new Error("Failed to fetch user info");
      }
      return response.data;
    } catch (error) {
      console.error("Error fetching user info:", error);
      if (error instanceof Error && error.message.includes("401")) {
        window.dispatchEvent(new Event("auth:unauthorized"));
      }
      return null;
    }
  }
  public async updateNickname(
    walletAddress: string,
    nickname: string | undefined
  ): Promise<boolean> {
    try {
      await this.authorizedApi
        .post(API_USER.updateNickname, {
          json: {
            wallet_address: walletAddress,
            nickname: nickname,
          },
        })
        .json<ApiResponse<unknown>>();
      return true;
    } catch (error) {
      console.error("Error updating nickname:", error);
      return false;
    }
  }

  public async updateAvatar(
    walletAddress: string,
    file: File
  ): Promise<string | null> {
    try {
      console.log("File object:", file);
      console.log("Wallet address:", walletAddress);
      const formData = new FormData();
      formData.append("avatar", file);
      formData.append("wallet_address", walletAddress);
      console.log("FormData entries:");
      for (const [key, value] of formData.entries()) {
        console.log(`${key}: ${value}`);
      }
      const response = await this.authorizedApi
        .post(API_USER.uploadAvatar, {
          body: formData,
        })
        .json<ApiResponse<{ photo_url: string }>>();

      console.log("API response:", response);
      return response.data.photo_url;
    } catch (error) {
      console.error("Error uploading avatar:", error);
      return null;
    }
  }
  // 當 token 更新時重新初始化 authorizedApi
  public refreshAuthorization(): void {
    this.authorizedApi = createAuthorizedRequest();
  }
}

export const userService = UserService.getInstance();
