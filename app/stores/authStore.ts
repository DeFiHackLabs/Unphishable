import { create } from "zustand";
import { useUserStore } from "@/app/stores/userStore";

interface AuthStore {
  logout: () => void;
}

export const useAuthStore = create<AuthStore>(() => ({
  logout: () => {
    useUserStore.getState().clearProfile();
    localStorage.removeItem("token");
    localStorage.removeItem("setAddress");
    window.dispatchEvent(new Event("wallet:disconnect"));
  },
}));
