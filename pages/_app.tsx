import axiosClient from '@/api-client/axiosClient';
import { EmptyLayout } from '@/component/layouts';
import { AppPropsWithLayout } from '@/models';
import { SWRConfig } from 'swr';
import '../styles/globals.css';

import { createEmotionCache } from '@/utils';
import theme from '@/utils/theme';
import { CacheProvider } from '@emotion/react';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';

const clientSideEmotionCache = createEmotionCache();

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
    const Layout = Component.Layout ?? EmptyLayout;

    return (
        <CacheProvider value={clientSideEmotionCache}>
            <ThemeProvider theme={theme}>
                <CssBaseline />

                <SWRConfig value={{ fetcher: (url) => axiosClient.get(url), shouldRetryOnError: false }}>
                    <Layout>
                        <Component {...pageProps} />
                    </Layout>
                </SWRConfig>
            </ThemeProvider>
        </CacheProvider>
    );
}

export default MyApp;
