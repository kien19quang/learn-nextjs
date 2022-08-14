import { PostItem } from '@/component/blog';
import { MainLayout } from '@/component/layouts';
import { Post } from '@/models';
import { getPostList } from '@/utils/post';
import { Box, Container, Divider, Typography } from '@mui/material';
import { GetStaticProps, GetStaticPropsContext } from 'next';
import Link from 'next/link';

export interface BlogListPageProps {
    posts: Post[];
}

export default function BlogListPage({ posts }: BlogListPageProps) {
    return (
        <Box>
            <Container>
                <Typography component="h1" variant="h4" fontWeight="bold" mb={6}>
                    Blog
                </Typography>
                <Box component="ul" sx={{ listStyle: 'none', p: 0 }}>
                    {posts.map((post) => {
                        return (
                            <li key={post.id}>
                                <Link href={`blog/${post.slug}`}>
                                    <a>
                                        <PostItem post={post} />
                                    </a>
                                </Link>

                                <Divider sx={{ my: 3 }} />
                            </li>
                        );
                    })}
                </Box>
            </Container>
        </Box>
    );
}

BlogListPage.Layout = MainLayout;

export const getStaticProps: GetStaticProps<BlogListPageProps> = async (context: GetStaticPropsContext) => {
    const data = await getPostList();

    return {
        props: {
            posts: data,
        },
    };
};
