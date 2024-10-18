import { Instagram } from 'lucide-react';

import { siteConfig } from '@/lib/config/site-config';

export function Footer() {
    return (
        <footer className="flex flex-col items-center justify-center h-60 gap-4 bg-white text-black mt-1">
            <span>{siteConfig.personal.name}</span>

            <div className="flex items-center justify-center gap-2">
                <span>{siteConfig.contact.phoneNumber.formatted}</span>
                <span>|</span>
                <span>{siteConfig.contact.email}</span>
            </div>

            <a href={siteConfig.links.instagram} target="_blank" rel="noreferrer">
                <Instagram className="h-4 w-4" />
            </a>
        </footer>
    );
}
