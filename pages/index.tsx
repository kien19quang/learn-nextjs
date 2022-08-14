import { SEO } from '@/component/common';
import { FeaturedWorks, HeroSection, RecentPosts } from '@/component/home';
import { MainLayout } from '@/component/layouts';
import { NextPageWithLayout } from '@/models';
import { Box } from '@mui/material';

const Home: NextPageWithLayout = () => {
    return (
        <Box>
            <SEO
                data={{
                    title: 'NextJS Tutorials | Kiên Quang',
                    description: 'Học NextJS cùng Kiên.  Học NextJS cho người mới bắt đầu',
                    thumbnailUrl:
                        'https://res.cloudinary.com/ddsypxjol/image/upload/v1660302467/Learn-NextJS/nextjs-logo_milivr.jpg',
                    url: 'https://learn-nextjs-sigma-self.vercel.app/',
                }}
            />
            <HeroSection />
            <RecentPosts />
            <FeaturedWorks />
        </Box>
    );
};

Home.Layout = MainLayout;

export default Home;
