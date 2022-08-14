import { MainLayout } from '@/component/layouts';
import { Post } from '@/models';
import { getPostList } from '@/utils/post';
import { Box, Container } from '@mui/material';
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import { useRouter } from 'next/router';
import * as React from 'react';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeDocument from 'rehype-document';
import rehypeFormat from 'rehype-format';
import rehypeSlug from 'rehype-slug';
import rehypeStringify from 'rehype-stringify';
import remarkParse from 'remark-parse';
import remarkPrism from 'remark-prism';
import remarkRehype from 'remark-rehype';
import remarkToc from 'remark-toc';
import { unified } from 'unified';
import Script from 'next/script';

export interface BlogPageProps {
    post: Post;
}

export default function DetailPost({ post }: BlogPageProps) {
    if (!post) return null;

    return (
        <Box>
            <Container>
                <p> {post.title} </p>
                <div dangerouslySetInnerHTML={{ __html: post.htmlContent || '' }}></div>
            </Container>

            <Script src="prism.js" strategy="afterInteractive"></Script>
        </Box>
    );
}

DetailPost.Layout = MainLayout;

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

    // Parse md to html
    const file = await unified()
        .use(remarkParse)
        .use(remarkToc, { heading: 'agenda.*' })
        .use(remarkPrism)
        .use(remarkRehype)
        .use(rehypeSlug)
        .use(rehypeAutolinkHeadings, { behavior: 'wrap' })
        .use(rehypeDocument, { title: 'Blog Details page' })
        .use(rehypeFormat)
        .use(rehypeStringify)
        .process(post.mdContent || '');

    post.htmlContent = file.toString();
    return {
        props: {
            post: post,
        },
    };
};
