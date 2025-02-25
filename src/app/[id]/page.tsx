"use client";

import { useGlobal } from "@/context/globalContext";
import { BlogPost } from "@/types/blog";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { useParams, useSearchParams } from "next/navigation";
import React from "react";
import { useEffect, useState } from "react";

export default function BlogDetails() {
  const { isFavourite, addFavourite, removeFavourite, selectedCategories, showAll, sortOrder } = useGlobal();
  const [post, setPost] = useState<BlogPost | null>(null);
  const t = useTranslations("heading");
  const params = useParams();
  const id = params.id;

  const favourite = post ? isFavourite(post.id) : false;
  const icon = favourite
    ? "/images/icons/star_icon_full.svg"
    : "/images/icons/star_icon_empty.svg";

  const handleFavouriteAction = (postId: number | undefined) => {
    if (!postId) return;
    if (favourite) {
      removeFavourite(postId);
    } else {
      addFavourite(postId);
    }
  };

  useEffect(() => {
    const fetchPost = async () => {
      if (!id) return;
      const res = await fetch(`http://tomcatmi6.usermd.net:3456/posts/${id}`, {
        cache: "no-store",
      });
      const data: BlogPost = await res.json();
      setPost(data);
    };

    fetchPost();
  }, [id]);

  const urlParams = new URLSearchParams();
  console.log(selectedCategories, "selectedCategories");
  if (selectedCategories.length > 0) {
    urlParams.set("categories", selectedCategories.join(","));
  }
  urlParams.set("favourites", (!showAll).toString());
  urlParams.set("sort", sortOrder);


  return (
    <main className="main-wrapper blog-post-details">
      <Link href={`/?${urlParams.toString()}`} className="heading-wrapper">
        <Image
          src={"/images/icons/arrow_left_icon.svg"}
          alt="Arrow left icon"
          width={16}
          height={12}
        />
        <h1 className="main-heading">{t("title")}</h1>
      </Link>

      <button
        className="favourites-action-button"
        onClick={() => handleFavouriteAction(post?.id)}
      >
        <Image
          src={icon}
          alt={`${favourite ? "Filled" : "Empty"} Star icon`}
          width={33}
          height={31}
        />
        {favourite ? t("removeFromFavourites") : t("addToFavourites")}
      </button>
      <h2 className="blog-post-title">{post?.title}</h2>

      <p className="blog-post-description">{post?.shortDescription}</p>
      <div
        className="blog-post-content"
        dangerouslySetInnerHTML={{ __html: `${post?.content}` }}
      ></div>

      <div className="blog-post-image-wrapper">
        {post?.blogImageUrl && (
          <Image
            src={`${post?.blogImageUrl}`}
            alt={post?.title ? post.title : "image for blog post"}
            width={1066}
            height={573}
          />
        )}
      </div>
    </main>
  );
}
