import { GoogleAnalytics } from '@next/third-parties/google';
import type { Metadata, ResolvingMetadata } from 'next';
import dynamic from 'next/dynamic';
import localFont from 'next/font/local';

import FacebookPixel from '@/components/facebook-pixel';
import { PageStack } from '@/components/page-stack';
import { TransitionRouter } from '@/components/transition-router';
import { WhatsappButton } from '@/components/whatsapp-button';
import { siteConfig } from '@/lib/config/site-config';
import { getSEOPageData } from '@/lib/services/SEO-page';

import './globals.css';

const HomePageContent = dynamic(() => import('@/components/pages/home'));
const ComercialPageContent = dynamic(() => import('@/components/pages/comercial'));
const InstitutionalPageContent = dynamic(() => import('@/components/pages/institutional'));
const FashionPageContent = dynamic(() => import('@/components/pages/fashion'));
const BioPageContent = dynamic(() => import('@/components/pages/bio'));

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

export async function generateMetadata(_props: {}, parent: ResolvingMetadata): Promise<Metadata> {
    const seo = await getSEOPageData('home');

    return {
        title: {
            default: seo.title || siteConfig.name,
            template: `%s | ${siteConfig.name}`,
        },
        description: seo.description || siteConfig.description,
        keywords: siteConfig.keywords,
        openGraph: {
            title: seo.title || siteConfig.name,
            description: seo.description || siteConfig.description,
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
}

export const revalidate = 3600; // revalidate at most every hour

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt">
            <GoogleAnalytics gaId="G-MC8M991ZJ8" />

            <body className={`${modernSans.className}`}>
                <TransitionRouter>
                    <PageStack
                        pages={[
                            { path: '/', element: <HomePageContent /> },
                            { path: '/comercial', element: <ComercialPageContent /> },
                            { path: '/fashion', element: <FashionPageContent /> },
                            { path: '/institutional', element: <InstitutionalPageContent /> },
                            { path: '/bio', element: <BioPageContent /> },
                        ]}
                    />
                </TransitionRouter>

                <WhatsappButton />

                <FacebookPixel />
            </body>
        </html>
    );
}
