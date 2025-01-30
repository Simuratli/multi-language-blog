import { CategoriesType } from "@/types/global.types";
import { StateCreator } from "zustand";

export interface CategoriesState {
  categories: CategoriesType[];
  setCategories: (categories: CategoriesType[]) => void;
}

export const useCategories: StateCreator<CategoriesState> = (set) => ({
  categories: [],
  setCategories: (categories) => set({ categories: categories }),
});
