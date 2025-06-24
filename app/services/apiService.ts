import ky from "ky";
import { useAuthStore } from "../stores/authStore";

// 基礎 API URL
const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "";

// 創建授權請求實例
export const createAuthorizedRequest = () => {
  const token =
    typeof window !== "undefined" ? localStorage.getItem("token") : null;

  //console.error("Token----:", token);
  return ky.extend({
    prefixUrl: BASE_URL,
    headers: {
      Authorization: token ? `Bearer ${token}` : "",
    },
    hooks: {
      beforeError: [
        async (error) => {
          const { response } = error;
          if (response && response.status === 401) {
            console.error("Unauthorized access - 401 error");
            useAuthStore.getState().logout();
          }
          return error;
        },
      ],
    },
  });
};
