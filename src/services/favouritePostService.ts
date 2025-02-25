const STORAGE_KEY = "favouriteBlogPostIds";

export const getFavouriteBlogPostIds = (): number[] => {
  if (typeof window === "undefined") return []; // guard for server
  const storedBlogPostIds = localStorage.getItem(STORAGE_KEY);
  return storedBlogPostIds ? JSON.parse(storedBlogPostIds) : [];
};

const saveFavouriteBlogPostIds = (blogPostIds: number[]) => {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(blogPostIds));
};

export const addFavouriteBlogPost = (id: number) => {
  const blogPostIds = getFavouriteBlogPostIds();
  if (!blogPostIds.includes(id)) {
    blogPostIds.push(id);
    saveFavouriteBlogPostIds(blogPostIds);
  }
};

export const removeFavouriteBlogPost = (id: number) => {
  const blogPostIds = getFavouriteBlogPostIds().filter(
    (blogPostId) => blogPostId !== id
  );
  saveFavouriteBlogPostIds(blogPostIds);
};

export const isFavouriteBlogPost = (id: number): boolean => {
  return getFavouriteBlogPostIds().includes(id);
};
