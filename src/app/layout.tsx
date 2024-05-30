import type { Metadata } from 'next';
import localFont from 'next/font/local';

import { siteConfig } from '@/lib/config/site-config';

import './globals.css';

const modernSans = localFont({ src: './fonts/ModernSans-Light.otf', display: 'swap' });

export const metadata: Metadata = {
    title: {
        default: siteConfig.name,
        template: `%s | ${siteConfig.name}`,
    },
    description: siteConfig.description,
    keywords: siteConfig.keywords,
    openGraph: {
        title: siteConfig.name,
        description: siteConfig.description,
        siteName: siteConfig.name,
        type: 'website',
        locale: 'pt_BR',
        url: siteConfig.url,
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt">
            <body className={`${modernSans.className}`}>{children}</body>
        </html>
    );
}
