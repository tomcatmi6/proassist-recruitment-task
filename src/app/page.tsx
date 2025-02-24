'use client';

import CategoriesList, { CategoryType } from "@/components/CategoriesList";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
export interface BlogPost {
  id: number;
  title: string;
  shortDescription: string;
  content: string;
  blogImageUrl: string;
  category: CategoryType;
  createdAt: string;
};

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
      <ul>
        {posts.map((post: BlogPost) => (
          <li key={post.id}>
            <strong>{post.title}</strong> - <div dangerouslySetInnerHTML={{ __html: `${post.content}` }}></div>
          </li>
        ))}
      </ul>
    </main>
  );
}
