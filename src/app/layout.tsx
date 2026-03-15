import { GoogleTagManager } from '@next/third-parties/google';
import type { Metadata } from 'next';
import localFont from 'next/font/local';

import FacebookPixel from '@/components/facebook-pixel';
import { WhatsappButton } from '@/components/whatsapp-button';
import { siteConfig } from '@/lib/config/site-config';

import './globals.css';
import { TransitionRouter } from '@/components/transition-router';
import { PageStack } from '@/components/page-stack';
import dynamic from 'next/dynamic';

const HomePage = dynamic(() => import('./page'));
const ComercialPage = dynamic(() => import('./comercial/page'));
const InstitutionalPage = dynamic(() => import('./institutional/page'));
const FashionPage = dynamic(() => import('./fashion/page'));
const BioPage = dynamic(() => import('./bio/page'));

const modernSans = localFont({
    src: [
        {
            path: './fonts/DMSans-Black.ttf',
            weight: '900',
            style: 'black',
        },
        {
            path: './fonts/DMSans-Bold.ttf',
            weight: '700',
            style: 'bold',
        },
        {
            path: './fonts/DMSans-Italic.ttf',
            weight: '400',
            style: 'italic',
        },
        {
            path: './fonts/DMSans-Light.ttf',
            weight: '300',
            style: 'light',
        },
        {
            path: './fonts/DMSans-Medium.ttf',
            weight: '500',
            style: 'medium',
        },
        {
            path: './fonts/DMSans-Regular.ttf',
            weight: '400',
            style: 'normal',
        },
    ],
    display: 'swap',
});

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
        images: [
            {
                url: 'https://sa-east-1.graphassets.com/A9JzQr5c4QpGJkNhtk2MXz/cmmqtb17f0rmp07kfdaudlax5',
                width: 1280,
                height: 720,
            },
        ],
    },
    verification: {
        other: {
            ['facebook-domain-verification']: '6ze61pygf5i9bh6s4mq8oem8j8oove',
        },
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt">
            <GoogleTagManager gtmId="G-MC8M991ZJ8" />

            <body className={`${modernSans.className}`}>
                <TransitionRouter>
                    <PageStack
                        pages={[
                            { path: '/', element: <HomePage /> },
                            { path: '/comercial', element: <ComercialPage /> },
                            { path: '/fashion', element: <FashionPage /> },
                            { path: '/institutional', element: <InstitutionalPage /> },
                            { path: '/bio', element: <BioPage /> },
                        ]}
                    />
                </TransitionRouter>

                <WhatsappButton />

                <FacebookPixel />
            </body>
        </html>
    );
}
