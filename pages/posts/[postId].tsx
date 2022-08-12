import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import { useRouter } from 'next/router';
import * as React from 'react';

export interface DetailPostProps {
    post: any;
}

export default function DetailPost({ post }: DetailPostProps) {
    return (
        <div>
            <p> {post.title} </p>
            <p> {post.author} </p>
            <p> {post.description} </p>
        </div>
    );
}

export const getStaticPaths: GetStaticPaths = async () => {
    console.log('\nGET STATIC PATHS');
    const res = await fetch('https://js-post-api.herokuapp.com/api/posts?_page=1');
    const data = await res.json();

    return {
        paths: data.data.map((x: any) => ({ params: { postId: x.id } })),
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps<DetailPostProps> = async (context: GetStaticPropsContext) => {
    console.log('\nGET STATIC PATHS', context.params?.postId);

    const postId = context.params?.postId;

    if (!postId) {
        return { notFound: true };
    }

    let res = await fetch(`https://js-post-api.herokuapp.com/api/posts/${postId}`);
    let data = await res.json();

    return {
        props: {
            post: data,
        },
    };
};
