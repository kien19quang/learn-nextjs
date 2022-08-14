import { SEO } from '@/models';
import Head from 'next/head';
import * as React from 'react';

export interface SEOProps {
    data: SEO;
}

export function SEO({ data }: SEOProps) {
    const { title, description, url, thumbnailUrl } = data;

    return (
        <Head>
            <title>NextJS Tutorials | Kiên Quang</title>
            <meta name="title" content={data.title} />
            <meta name="description" content={data.description} />

            <meta property="og:type" content="website" />
            <meta property="og:url" content={data.url} />
            <meta property="og:title" content={data.title} />
            <meta property="og:description" content={data.description} />
            <meta property="og:image" content={data.thumbnailUrl} />

            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={data.url} />
            <meta property="twitter:title" content={data.title} />
            <meta property="twitter:description" content={data.description} />
            <meta property="twitter:image" content={data.thumbnailUrl}></meta>
        </Head>
    );
}
