import { create } from "zustand";
import { CategoriesState, useCategories } from "./categories";

export const useStore = create<CategoriesState>()((...a) => ({
  ...useCategories(...a),
}));
