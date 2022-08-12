import { Box, Stack, Link as MuiLink } from '@mui/material';
import { Container } from '@mui/system';
import Link from 'next/link';
import * as React from 'react';
import { ROUTE_LIST } from './routes';
import clsx from 'clsx';
import { useRouter } from 'next/router';

export interface HeaderDesktopProps {}

export default function HeaderDesktop(props: HeaderDesktopProps) {
    const router = useRouter();

    return (
        <Box display={{ xs: 'none', md: 'block' }} py={2}>
            <Container>
                <Stack direction="row" justifyContent="flex-end">
                    {ROUTE_LIST.map((route) => (
                        <Link key={route.path} href={route.path} passHref>
                            <MuiLink
                                sx={{ ml: 2, fontWeight: 'medium' }}
                                className={`${route.path === router.pathname && 'active'}`}
                            >
                                {route.label}
                            </MuiLink>
                        </Link>
                    ))}
                </Stack>
            </Container>
        </Box>
    );
}
