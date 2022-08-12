import { GetStaticProps, GetStaticPropsContext } from 'next';
import * as React from 'react';
import Link from 'next/link';

export interface PostListPageProps {
    posts: any[];
}

export default function PostListPage({ posts }: PostListPageProps) {
    console.log(posts);

    return (
        <div>
            Post List Page
            <ul>
                {posts.map((item) => {
                    return (
                        <li key={item.id}>
                            <Link href={`posts/${item.id}`}>
                                <a>{item.title}</a>
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export const getStaticProps: GetStaticProps<PostListPageProps> = async (context: GetStaticPropsContext) => {
    let response = await fetch('https://js-post-api.herokuapp.com/api/posts?_page=1');
    let data = await response.json();
    console.log(data);

    return {
        props: {
            posts: data.data.map((x: any) => ({ id: x.id, title: x.title })),
        },
    };
};
