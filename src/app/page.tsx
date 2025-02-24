'use client';

import BlogFilters from "@/components/BlogFilters";
import BlogList from "@/components/BlogList";
import CategoriesList from "@/components/CategoriesList";
import { BlogPost } from "@/types/blog";
import { CategoryType } from "@/types/categories";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";


export default function Home() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const t = useTranslations('heading');

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch('http://tomcatmi6.usermd.net:3456/posts', {
        cache: 'no-store',
      });
      const data: BlogPost[] = await res.json();
      setPosts(data);
    };

    fetchPosts();
  }, []);

  return (
    <main className="main-wrapper">
      <h1 className="main-heading">{t('title')}</h1>
      <CategoriesList />
      <BlogFilters selectedCategories={[CategoryType.INTERPRETATIONS, CategoryType.AVAILABLE, CategoryType.KNOWLEDGE]} onCategoryRemove={() => null} showAll={true} onToggleShowAll={() => null} sortOrder={'newest'} onSortChange={() => null} />
      <BlogList blogPosts={posts} />
    </main>
  );
}
