import { FeaturedWorks, HeroSection, RecentPosts } from '@/component/home';
import { MainLayout } from '@/component/layouts';
import { NextPageWithLayout } from '@/models';
import { Box } from '@mui/material';

const Home: NextPageWithLayout = () => {
    return (
        <Box>
            <HeroSection />
            <RecentPosts />
            <FeaturedWorks />
        </Box>
    );
};

Home.Layout = MainLayout;

export default Home;
