'use client';

import { isFavouriteBlogPost } from "@/services/favouritePostService";
import { BlogPost } from "@/types/blog";
import { useTranslations } from "next-intl";
import Image from 'next/image';
import { useParams, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";



export default function BlogDetails() {
    const [post, setPost] = useState<BlogPost | null>(null);
    const t = useTranslations('heading');

    const params = useParams();
    const id = params.id;
    const isFavourite = isFavouriteBlogPost(Number(id)) || false;
    const icon = isFavourite ? '/images/icons/star_icon_full.svg' : '/images/icons/star_icon_empty.svg';

    useEffect(() => {
        const fetchPost = async () => {
            if (!id) return;
            const res = await fetch(`http://tomcatmi6.usermd.net:3456/posts/${id}`, {
                cache: 'no-store',
            });
            const data: BlogPost = await res.json();
            setPost(data);
        };

        fetchPost();
    }, [id]);

  return (
    <main className="main-wrapper">
        <div className="heading-wrapper">
<Image src={'/images/icons/arrow_left_icon.svg'} alt="Arrow left icon" width={16} height={12} />
      <h1 className="main-heading">{t('title')}</h1>
        </div>
        <div className="favourites-wrapper">
<button className="favourites-action-button" onClick={() => null}>
<Image src={icon} alt={`${isFavourite ? 'Filled' : 'Empty'} Star icon`} width={33} height={31} />
{isFavourite ? t('removeFromFavourites') : t('addToFavourites')}
</button>
        </div>
        <h2 className="blog-post-title">
            {post?.title}
        </h2>
      
        <p className="blog-post-description">
            {post?.shortDescription}
        </p>
        <div className="blog-post-content" dangerouslySetInnerHTML={{ __html: `${post?.content}` }}></div>

<div className="blog-post-image-wrapper">
{post?.blogImageUrl && <Image src={`${post?.blogImageUrl}`} alt={post?.title ? post.title : 'image for blog post'} width={800} height={400} />}
</div>
    </main>
  );
}
