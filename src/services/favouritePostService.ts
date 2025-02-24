import { BlogPost } from "@/types/blog";

const STORAGE_KEY = "favouriteBlogPosts";

export const getFavouriteBlogPosts = (): BlogPost[] => {
  if (typeof window === "undefined") return []; // guard for server
  const storedBlogPosts = localStorage.getItem(STORAGE_KEY);
  return storedBlogPosts ? JSON.parse(storedBlogPosts) : [];
};

const saveFavouriteBlogPosts = (blogPosts: BlogPost[]) => {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(blogPosts));
};

export const addFavouriteBlogPost = (blogPost: BlogPost) => {
  const blogPosts = getFavouriteBlogPosts();
  if (!blogPosts.some((post) => post.id === blogPost.id)) {
    blogPosts.push(blogPost);
    saveFavouriteBlogPosts(blogPosts);
  }
};

export const removeFavouriteBlogPost = (id: number) => {
  const blogPosts = getFavouriteBlogPosts().filter((blogPost) => blogPost.id !== id);
  saveFavouriteBlogPosts(blogPosts);
};

export const isFavouriteBlogPost = (id: number): boolean => {
  return getFavouriteBlogPosts().some((blogPost) => blogPost.id === id);
};