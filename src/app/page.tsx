"use client";

import BlogFilters from "@/components/BlogFilters";
import BlogList from "@/components/BlogList";
import CategoriesList from "@/components/CategoriesList";
import { useGlobal } from "@/context/globalContext";
import { BlogPost } from "@/types/blog";
import { CategoryType } from "@/types/categories";
import { useTranslations } from "next-intl";
import { useEffect, useMemo, useState } from "react";
import { toast } from "react-toastify";

export default function Home() {
  const {
    selectedCategories,
    setSelectedCategories,
    showAll,
    setShowAll,
    sortOrder,
    setSortOrder,
    isFavourite,
  } = useGlobal();
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const t = useTranslations("heading");

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch("http://tomcatmi6.usermd.net:3456/posts", {
          cache: "no-store",
        });
        if (!res.ok) {
          throw new Error(`${t("httpErrorMessage")} ${res.status}`);
        }
        const data: BlogPost[] = await res.json();
        setPosts(data);
      } catch (error) {
        console.error(`${t("fetchErrorMessageWithStatus")}`, error);
        toast.error(`${t("fetchErrorMessage")}`);
      }
    };

    fetchPosts();
  }, []);
  const filteredPosts = posts.filter((post) => {
    const categoryMatch =
      selectedCategories.length === 0 ||
      selectedCategories.includes(post.category);
    const favouriteMatch = showAll ? true : isFavourite(post.id);
    return categoryMatch && favouriteMatch;
  });

  const sortedPosts = useMemo(() => {
    return [...filteredPosts].sort((a, b) => {
      if (sortOrder === "newest") {
        return (
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
      }
      return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
    });
  }, [filteredPosts, sortOrder]);

  const handleCategorySelect = (category: CategoryType) => {
    if (!selectedCategories.includes(category)) {
      setSelectedCategories([...selectedCategories, category]);
    } else {
      setSelectedCategories(selectedCategories.filter((c) => c !== category));
    }
  };

  const handleCategoryRemove = (category: CategoryType) => {
    setSelectedCategories(selectedCategories.filter((c) => c !== category));
  };

  return (
    <main className="main-wrapper">
      <h1 className="main-heading">{t("title")}</h1>
      <CategoriesList
        onCategorySelect={handleCategorySelect}
        selectedCategories={selectedCategories}
      />
      <BlogFilters
        selectedCategories={selectedCategories}
        onCategoryRemove={handleCategoryRemove}
        showAll={showAll}
        onToggleShowAll={setShowAll}
        sortOrder={sortOrder}
        onSortChange={setSortOrder}
      />
      <BlogList blogPosts={sortedPosts} />
    </main>
  );
}
