'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { siteConfig } from '@/lib/config/site-config';
import { cn } from '@/lib/utils';

export function HeaderNav() {
    const pathname = usePathname();

    return (
        <nav className="hidden md:flex items-center gap-14">
            {/* <Link href="/" className={cn({ underline: pathname === '/' })}>
                INÍCIO
            </Link> */}

            <Link href="/fashion" className={cn({ underline: pathname === '/fashion' })}>
                FASHION
            </Link>

            <Link href="/institutional" className={cn({ underline: pathname === '/institutional' })}>
                INSTITUCIONAL
            </Link>

            <Link href="/event" className={cn({ underline: pathname === '/event' })}>
                EVENTO
            </Link>

            <Link href="/comercial" className={cn({ underline: pathname === '/comercial' })}>
                COMERCIAL
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
                QUERO FAZER UM ORÇAMENTO
            </a>
        </nav>
    );
}
