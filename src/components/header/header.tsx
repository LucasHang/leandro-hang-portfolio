import { Instagram } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { siteConfig } from '@/lib/config/site-config';

import { HeaderNav } from './nav';

import logoSvg from '../../../public/images/svg/logo.svg';

export function Header() {
    return (
        <header className="h-site-header flex items-center justify-between px-32 bg-transparent z-50 fixed left-0 top-0 w-full backdrop-blur">
            <Link href="/">
                <Image src={logoSvg} alt="Hang Leandro Logo" className="h-10 w-auto" />
            </Link>

            <nav className="flex items-center gap-14">
                <HeaderNav />

                <a href={siteConfig.links.instagram} target="_blank" rel="noreferrer" className="ml-8">
                    <Instagram className="h-4 w-4" />
                </a>
            </nav>
        </header>
    );
}
