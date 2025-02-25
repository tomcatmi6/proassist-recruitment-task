import { CategoryType } from "./categories";

export interface BlogPost {
  id: number;
  title: string;
  shortDescription: string;
  content: string;
  blogImageUrl: string;
  category: CategoryType;
  createdAt: string;
}
