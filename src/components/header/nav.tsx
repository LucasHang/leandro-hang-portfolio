'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { siteConfig } from '@/lib/config/site-config';
import { cn } from '@/lib/utils';

export function HeaderNav() {
    const pathname = usePathname();

    return (
        <nav className="hidden md:flex items-center gap-14">
            <Link href="/" className={cn({ underline: pathname === '/' })}>
                INÍCIO
            </Link>

            <Link href="/films" className={cn({ underline: pathname === '/films' })}>
                FILMES
            </Link>

            <Link href="/fashion" className={cn({ underline: pathname === '/fashion' })}>
                FASHION
            </Link>

            <Link href="/bio" className={cn({ underline: pathname === '/bio' })}>
                BIO
            </Link>

            <a
                href={`https://wa.me/${siteConfig.contact.phoneNumber.raw}`}
                target="_blank"
                rel="noreferrer"
                className="py-3 px-4 rounded-md bg-green-950 text-white font-bold text-sm"
            >
                ENTRAR EM CONTATO
            </a>
        </nav>
    );
}
