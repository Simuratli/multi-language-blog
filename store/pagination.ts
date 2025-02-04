import { StateCreator } from "zustand";

export interface PaginationStateTypes {
  currentPage: number;
  setCurrentPage: (e: number) => void;
}

export const usePagination: StateCreator<PaginationStateTypes> = (set) => ({
  currentPage: 1,
  setCurrentPage: (value) => set({ currentPage: value }),
});
