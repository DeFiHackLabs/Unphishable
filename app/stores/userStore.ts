import { create } from "zustand";
import { userService } from "../services/userService";

interface UserProfile {
  nickname?: string;
  photo_url?: string | null;
  security_rank?: string;
  security_score?: number;
  completed_challenges?: number;
  total_challenges?: number;
  has_completed_challenge1?: boolean;
}

interface UserInfo {
  total_score?: number;
  completion_count?: number;
  total_challenges?: number;
  rank?: number;
}

interface UserStore {
  profile: UserProfile | null;
  lastFetchAddress: string | null;
  userInfo: UserInfo | null;
  isLoading: boolean;
  error: string | null;
  fetchProfile: (address: string, force?: boolean) => Promise<void>;
  fetchUserInfo: (address: string, force?: boolean) => Promise<void>;
  clearProfile: () => void;
  updateProfile: (nickname: string, photoUrl: string | null) => void;
}

export const useUserStore = create<UserStore>((set, get) => ({
  profile: null,
  userInfo: null,
  lastFetchAddress: null,
  isLoading: false,
  error: null,

  fetchProfile: async (address: string, force: boolean = false) => {
    const state = get();

    // 如果已經有資料且地址相同，且不強制更新，則跳過
    if (!force && state.profile && state.lastFetchAddress === address) {
      return;
    }

    set({ isLoading: true, error: null });

    try {
      const response = await userService.getUser(address);

      // 確保回應包含必要數據
      if (!response || !response.wallet_address) {
        throw new Error("Invalid profile data");
      }
      console.log("Fetched profile data:", response);
      set({
        profile: {
          nickname: response.nickname || "Anonymous",
          photo_url: response.photo_url,
          security_rank: "初級守護者",
          security_score: 0,
          completed_challenges: 0,
          total_challenges: 30,
          has_completed_challenge1: response.has_completed_challenge1 || false,
        },
        lastFetchAddress: address,
        error: null,
      });
    } catch (error) {
      // 處理 401 錯誤
      if (error instanceof Error && error.message.includes("401")) {
        window.dispatchEvent(new Event("auth:unauthorized"));
      }

      set({
        profile: null,
        lastFetchAddress: null,
        error:
          error instanceof Error ? error.message : "Failed to fetch profile",
      });

      throw error; // 向上拋出錯誤以便組件處理
    } finally {
      set({ isLoading: false });
    }
  },

  // 新增呼叫 gitUserInfo 的函數
  fetchUserInfo: async (address: string, force: boolean = false) => {
    const state = get();

    console.log("Fetching user info for address:", address);
    console.log("Current state:", force);
    // 如果已經有使用者資訊且不強制更新，則跳過
    if (!force && state.userInfo && state.lastFetchAddress === address) {
      return;
    }

    set({ isLoading: true, error: null });

    try {
      const userInfo = await userService.gitUserInfo(address);

      if (userInfo) {
        // 更新 profile 中的相關資訊
        set((state) => ({
          userInfo,
          profile: state.profile
            ? {
                ...state.profile,
                security_score: userInfo.total_score || 0,
                completed_challenges: userInfo.completion_count || 0,
              }
            : null,
          error: null,
        }));
      }
    } catch (error) {
      set({
        error:
          error instanceof Error ? error.message : "Failed to fetch user info",
      });
      console.error("Error fetching user info:", error);
    } finally {
      set({ isLoading: false });
    }
  },

  clearProfile: () => {
    set({
      profile: null,
      userInfo: null,
      lastFetchAddress: null,
      error: null,
    });
  },

  updateProfile: (nickname: string, photoUrl: string | null) => {
    set((state) => ({
      profile: state.profile
        ? {
            ...state.profile,
            nickname,
            photo_url: photoUrl,
          }
        : null,
    }));
  },
}));
