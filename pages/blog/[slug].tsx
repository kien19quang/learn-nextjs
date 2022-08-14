import { Post } from '@/models';
import { getPostList } from '@/utils/post';
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import { useRouter } from 'next/router';
import * as React from 'react';

export interface BlogPageProps {
    post: Post;
}

export default function DetailPost({ post }: BlogPageProps) {
    if (!post) return null;

    return (
        <div>
            <p> {post.title} </p>
        </div>
    );
}

export const getStaticPaths: GetStaticPaths = async () => {
    const postList = await getPostList();

    return {
        paths: postList.map((x: any) => ({ params: { slug: x.slug } })),
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps<BlogPageProps> = async (context: GetStaticPropsContext) => {
    const postList = await getPostList();
    const slug = context.params?.slug;

    if (!slug) {
        return { notFound: true };
    }

    const post = postList.find((x) => x.slug === slug);

    if (!post) return { notFound: true };

    return {
        props: {
            post: post,
        },
    };
};
