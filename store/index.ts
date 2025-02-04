import { create } from "zustand";
import { CategoriesState, useCategories } from "./categories";
import { usePagination, PaginationStateTypes } from "./pagination";

export const useStore = create<CategoriesState & PaginationStateTypes>()(
  (...a) => ({
    ...useCategories(...a),
    ...usePagination(...a),
  }),
);
