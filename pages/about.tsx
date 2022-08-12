//import Header from 'component/common/header';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { AdminLayout } from '@/component/layouts';
import { useAuth } from '@/hooks';
import { Box, Typography } from '@mui/material';

//const Header = dynamic(() => import('component/common/header'), { ssr: false });

export interface AboutPostProps {}

export default function AboutPost(props: AboutPostProps) {
    const [postList, setPostList] = useState([]);
    const { logout } = useAuth();

    let router = useRouter();
    let pageNumber = router.query?.page;

    useEffect(() => {
        if (!pageNumber) return;

        (async () => {
            const res = await fetch(`https://js-post-api.herokuapp.com/api/posts?_page=${pageNumber}`);
            const data = await res.json();

            setPostList(data.data);
        })();
    }, [pageNumber]);

    let handleNextPage = () => {
        router.push(
            {
                pathname: '/about',
                query: {
                    page: Number(pageNumber) + 1,
                },
            },
            undefined,
            { shallow: true },
        );
    };

    let handleLogoutClick = async () => {
        try {
            await logout();
            router.push('/login');
        } catch (error) {
            console.log('failed to logout', error);
        }
    };

    return (
        <Box>
            <Typography component="h1" variant="h3" color="primary.main">
                About Post
            </Typography>

            <ul>
                {postList.length > 0 &&
                    postList.map((item: any) => {
                        return (
                            <li key={item.id}>
                                <Link href={`posts/${item.id}`}>
                                    <a>{item.title}</a>
                                </Link>
                            </li>
                        );
                    })}
            </ul>

            <div>
                <button onClick={handleLogoutClick}>Logout</button>
            </div>

            <button onClick={handleNextPage}>NextPage</button>
        </Box>
    );
}

AboutPost.Layout = AdminLayout;
