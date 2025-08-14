import { GoogleTagManager } from '@next/third-parties/google';
import type { Metadata } from 'next';
import localFont from 'next/font/local';

import FacebookPixel from '@/components/facebook-pixel';
import { WhatsappButton } from '@/components/whatsapp-button';
import { siteConfig } from '@/lib/config/site-config';

import './globals.css';

const modernSans = localFont({
    src: [
        {
            path: './fonts/MabryPro-Black.ttf',
            weight: '900',
            style: 'black',
        },
        {
            path: './fonts/MabryPro-Bold.ttf',
            weight: '700',
            style: 'bold',
        },
        {
            path: './fonts/MabryPro-Italic.ttf',
            weight: '400',
            style: 'italic',
        },
        {
            path: './fonts/MabryPro-Light.ttf',
            weight: '300',
            style: 'light',
        },
        {
            path: './fonts/MabryPro-Medium.ttf',
            weight: '500',
            style: 'medium',
        },
        {
            path: './fonts/MabryPro-Regular.ttf',
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
                {children}

                <WhatsappButton />

                <FacebookPixel />
            </body>
        </html>
    );
}
