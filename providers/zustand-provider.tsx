"use client";
import { useStore } from "@/store";
import { CategoriesType } from "@/types/global.types";
import React, { useEffect } from "react";

interface CategoriesProviderInterface {
  categories: CategoriesType[];
  children: React.ReactNode;
}

const CategoriesProvider = ({
  categories,
  children,
}: CategoriesProviderInterface) => {
  const setCategories = useStore((state) => state.setCategories);

  useEffect(() => {
    setCategories(categories); // Update Zustand store in client
  }, [categories, setCategories]);

  return <>{children}</>;
};

export default CategoriesProvider;
