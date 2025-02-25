"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import { useRouter, useSearchParams } from "next/navigation";
import {
  getFavouriteBlogPostIds,
  addFavouriteBlogPost,
  removeFavouriteBlogPost,
} from "@/services/favouritePostService";
import { CategoryType } from "@/types/categories";

interface GlobalContextProps {
  selectedCategories: CategoryType[];
  setSelectedCategories: (categories: CategoryType[]) => void;
  showAll: boolean;
  setShowAll: (value: boolean) => void;
  sortOrder: "newest" | "oldest";
  setSortOrder: (order: "newest" | "oldest") => void;
  favouriteBlogPostIds: number[];
  addFavourite: (id: number) => void;
  removeFavourite: (id: number) => void;
  isFavourite: (id: number) => boolean;
}

const GlobalContext = createContext<GlobalContextProps | undefined>(undefined);

export const GlobalProvider = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const initialCategories = searchParams.get("categories")
    ? (searchParams.get("categories")!.split(",") as CategoryType[])
    : [];

  const initialShowAll =
    searchParams.get("favourites") === "false" ? false : true;
  const initialSort =
    (searchParams.get("sort") as "newest" | "oldest") || "newest";

  const [selectedCategories, setSelectedCategories] =
    useState<CategoryType[]>(initialCategories);
  const [showAll, setShowAll] = useState<boolean>(initialShowAll);
  const [sortOrder, setSortOrder] = useState<"newest" | "oldest">(initialSort);

  const [favouriteBlogPostIds, setFavouriteBlogPostIds] = useState<number[]>(
    []
  );

  useEffect(() => {
    const params = new URLSearchParams();
    if (selectedCategories.length > 0) {
      params.set("categories", selectedCategories.join(","));
    }
    params.set("favourites", (!showAll).toString());
    params.set("sort", sortOrder);
    router.push(`?${params.toString()}`);
  }, [selectedCategories, showAll, sortOrder, router]);

  useEffect(() => {
    setFavouriteBlogPostIds(getFavouriteBlogPostIds());
  }, []);

  const addFavourite = (id: number) => {
    if (!favouriteBlogPostIds.includes(id)) {
      addFavouriteBlogPost(id);
      setFavouriteBlogPostIds([...favouriteBlogPostIds, id]);
    }
  };

  const removeFavourite = (id: number) => {
    if (favouriteBlogPostIds.includes(id)) {
      removeFavouriteBlogPost(id);
      setFavouriteBlogPostIds(
        favouriteBlogPostIds.filter((favId) => favId !== id)
      );
    }
  };

  const isFavourite = (id: number) => favouriteBlogPostIds.includes(id);

  return (
    <GlobalContext.Provider
      value={{
        selectedCategories,
        setSelectedCategories,
        showAll,
        setShowAll,
        sortOrder,
        setSortOrder,
        favouriteBlogPostIds,
        addFavourite,
        removeFavourite,
        isFavourite,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobal = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error("useGlobal musi być używany w obrębie GlobalProvider");
  }
  return context;
};
