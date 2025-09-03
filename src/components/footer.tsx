import { Instagram } from 'lucide-react';

import { siteConfig } from '@/lib/config/site-config';

export function Footer() {
    return (
        <footer className="flex flex-col items-center justify-center h-60 gap-4 bg-white text-black mt-1">
            <div className="flex items-center justify-center gap-2 flex-wrap font-light">
                <span className="uppercase">{siteConfig.personal.name}</span>
                <span>|</span>
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
