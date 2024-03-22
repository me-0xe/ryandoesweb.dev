import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type Theme = 'light' | 'dark';

type ThemeStore = {
  mode: Theme | undefined;
  set: (mode: Theme) => void;
};

export const useThemeStore = create<ThemeStore>()(
  persist(
    (set) => ({
      mode: 'dark',
      set: (mode: 'light' | 'dark') => set(() => ({ mode }))
    }),
    {
      name: 'theme-storage'
    }
  )
);
