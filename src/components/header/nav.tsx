'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { cn } from '@/lib/utils';

export function HeaderNav() {
    const pathname = usePathname();

    return (
        <>
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
        </>
    );
}
