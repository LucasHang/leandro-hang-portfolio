import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { Layout } from '@/components/layout';
import { siteConfig } from '@/lib/config/site-config';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

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
            <body className={inter.className}>
                <Layout>{children}</Layout>
            </body>
        </html>
    );
}
