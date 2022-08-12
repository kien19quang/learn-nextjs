import { Post, Work } from '@/models';
import { Box, Typography } from '@mui/material';
import { Container, Stack } from '@mui/system';
import * as React from 'react';
import { WorkList } from '../work';
import PostCard from './postCard';

export function FeaturedWorks() {
    const workList: Work[] = [
        {
            id: 1,
            title: 'Designing Dashboards',
            createdAt: '1648363391671',
            updatedAt: '1648363391671',
            tagList: ['Dashboard'],
            shortDescription:
                'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
            fullDescription: '',
            thumbnailUrl:
                'https://res.cloudinary.com/ddsypxjol/image/upload/v1660229198/Learn-NextJS/Rectangle_30_1_v42ffz.jpg',
        },
        {
            id: 2,
            title: 'Vibrant Portraits of 2020',
            createdAt: '1648363391671',
            updatedAt: '1648363391671',
            tagList: ['Illustration'],
            shortDescription:
                'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
            fullDescription: '',
            thumbnailUrl:
                'https://res.cloudinary.com/ddsypxjol/image/upload/v1660229198/Learn-NextJS/Rectangle_32_1_d7irdd.jpg',
        },
        {
            id: 3,
            title: '36 Days of Malayalam type',
            createdAt: '1648363391671',
            updatedAt: '1648363391671',
            tagList: ['Typography'],
            shortDescription:
                'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
            fullDescription: '',
            thumbnailUrl:
                'https://res.cloudinary.com/ddsypxjol/image/upload/v1660229197/Learn-NextJS/Rectangle_34_1_b6vre2.jpg',
        },
    ];

    return (
        <Box component="section" pt={2} pb={4}>
            <Container>
                <Typography variant="h5">Featured Works</Typography>

                <WorkList workList={workList} />
            </Container>
        </Box>
    );
}
