import { BlogPost } from '@/types/blog';
import { useTranslations } from 'next-intl';
import React from 'react';
import BlogPostItem from '../BlogPostItem';

interface BlogListProps {
    blogPosts: BlogPost[];
}

const BlogList: React.FC<BlogListProps> = ({ blogPosts = [] }) => {
    const t = useTranslations('blogList');

    return (
        <section className="blog-list-wrapper">
            {blogPosts && blogPosts.length > 0 ? (
                <ul className='blog-list'>
                    {blogPosts.map((post: BlogPost) => (
                        <BlogPostItem key={post.id} post={post} />
                    ))}
                </ul>
            ) :
                <p>{t('noPosts')}</p>
            }

        </section>
    );
};

export default BlogList;