import { LayoutProps } from '@/models';
import * as React from 'react';
import Link from 'next/link';

export function EmptyLayout({ children }: LayoutProps) {
    return <div>{children}</div>;
}
