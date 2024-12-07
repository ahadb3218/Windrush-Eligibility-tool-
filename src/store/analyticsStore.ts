import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface AnalyticsState {
  completedQuizzes: number;
  lastCompletedAt: string | null;
  incrementCompletedQuizzes: () => void;
}

export const useAnalyticsStore = create<AnalyticsState>()(
  persist(
    (set) => ({
      completedQuizzes: 0,
      lastCompletedAt: null,
      incrementCompletedQuizzes: () =>
        set((state) => ({
          completedQuizzes: state.completedQuizzes + 1,
          lastCompletedAt: new Date().toISOString(),
        })),
    }),
    {
      name: 'quiz-analytics',
    }
  )
);