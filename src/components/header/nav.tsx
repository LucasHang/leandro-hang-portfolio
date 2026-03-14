'use client';

import { Instagram } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { siteConfig } from '@/lib/config/site-config';
import { cn } from '@/lib/utils';

export interface HeaderNavProps extends React.HTMLAttributes<HTMLElement> {}

export function HeaderNav({ className, ...rest }: HeaderNavProps) {
    const pathname = usePathname();

    return (
        <nav className={cn('hidden md:flex items-center gap-10 font-light', className)} {...rest}>
            <Link href="/fashion" className={cn({ underline: pathname === '/fashion' })}>
                FASHION
            </Link>

            <Link href="/comercial" className={cn({ underline: pathname === '/comercial' })}>
                COMERCIAL
            </Link>

            <Link href="/institutional" className={cn({ underline: pathname === '/institutional' })}>
                INSTITUCIONAL
            </Link>

            <Link href="/bio" className={cn({ underline: pathname === '/bio' })}>
                SOBRE
            </Link>

            <a href={siteConfig.links.instagram} target="_blank" rel="noreferrer">
                <Instagram className="h-4 w-4" />
            </a>

            {/* <a
                href={`https://wa.me/${siteConfig.contact.phoneNumber.raw}`}
                target="_blank"
                rel="noreferrer"
                className="py-3 px-4 rounded-md bg-green-950 text-white font-bold text-sm"
            >
                ORÇAMENTO
            </a> */}
        </nav>
    );
}
