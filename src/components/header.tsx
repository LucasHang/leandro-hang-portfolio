import { Instagram } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { siteConfig } from '@/lib/config/site-config';

import logoSvg from '../../public/images/svg/logo.svg';

export function Header() {
    return (
        <header className="h-site-header flex items-center justify-between py-8 px-16 bg-transparent z-10 fixed w-full">
            <Link href="/">
                <Image src={logoSvg} alt="Hang Leandro Logo" className="h-10 w-auto" />
            </Link>

            <nav className="flex items-center gap-10">
                <Link href="/">INÍCIO</Link>
                <Link href="/films">FILMES</Link>
                <Link href="/fashion">FASHION</Link>
                <Link href="/bio">BIO</Link>

                <a href={siteConfig.links.instagram} target="_blank" rel="noreferrer" className="ml-8">
                    <Instagram />
                </a>
            </nav>
        </header>
    );
}
