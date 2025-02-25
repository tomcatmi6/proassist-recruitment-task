"use client";
import { BlogPost } from "@/types/blog";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface BlogPostItemProps {
  post: BlogPost;
}

const BlogPostItem: React.FC<BlogPostItemProps> = ({ post }) => {
  const t = useTranslations("blogItem");
  const postDate = new Date(post.createdAt);
  const formattedDate = postDate.toLocaleDateString("de-DE", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
  return (
    <li key={post.id} className="blog-post-item-wrapper">
      <p className="blog-post-item-category">{post.category}</p>
      <h3 className="blog-post-item-title">{post.title}</h3>
      <span className="divider"></span>
      <p className="blog-post-item-date">{formattedDate}</p>
      <p className="blog-post-item-description">{post.shortDescription}</p>
      <Link href={`/${post.id}`} className="blog-post-item-link">
        <span>{t("readMore")}</span>
        <Image
          src={"/images/icons/arrow_right_icon.svg"}
          alt="Arrow right icon"
          width={21}
          height={14}
        />
      </Link>
    </li>
  );
};

export default BlogPostItem;
