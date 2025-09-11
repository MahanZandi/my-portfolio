import { create } from "zustand";

type Theme = "light" | "dark" | null;

interface ThemeState {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

export const useStore = create<ThemeState>((set) => ({
  theme: null,
  setTheme: (theme) => set({ theme }),
}));
