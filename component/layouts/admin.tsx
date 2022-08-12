import { LayoutProps } from '@/models';
import * as React from 'react';
import Link from 'next/link';
import { Auth } from '../common';

export function AdminLayout({ children }: LayoutProps) {
    return (
        <Auth>
            <h1>Admin Layout</h1>

            <div>Side Bar</div>

            <Link href="/">
                <a>Home </a>
            </Link>

            <Link href="/about">
                <a>About</a>
            </Link>

            <div> {children} </div>
        </Auth>
    );
}
