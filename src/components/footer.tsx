'use client';

import { Instagram } from 'lucide-react';
import { usePathname } from 'next/navigation';

import { siteConfig } from '@/lib/config/site-config';

export function Footer() {
    const pathname = usePathname();
    const isHomePage = pathname === '/';

    if (isHomePage) {
        return null;
    }

    return (
        <footer className="flex flex-col items-center justify-center h-60 gap-4 mt-1 px-4">
            <div className="flex items-center justify-center gap-2 flex-wrap font-light">
                <a
                    href={`https://wa.me/${siteConfig.contact.phoneNumber.raw}`}
                    target="_blank"
                    rel="noreferrer"
                >
                    {siteConfig.contact.phoneNumber.formatted}
                </a>
                <span>|</span>
                <a href={`mailto:${siteConfig.contact.email}`} className="uppercase">
                    {siteConfig.contact.email}
                </a>
            </div>

            <span className="font-light">{siteConfig.company.cnpj}</span>

            <a href={siteConfig.links.instagram} target="_blank" rel="noreferrer">
                <Instagram className="h-4 w-4" />
            </a>
        </footer>
    );
}
