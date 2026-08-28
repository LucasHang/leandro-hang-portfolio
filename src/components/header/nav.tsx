'use client';

import { Instagram } from 'lucide-react';

import { siteConfig } from '@/lib/config/site-config';
import { cn } from '@/lib/utils';

import { NavLink } from '../nav-link';

export interface HeaderNavProps extends React.HTMLAttributes<HTMLElement> {}

export function HeaderNav({ className, ...rest }: HeaderNavProps) {
    return (
        <nav className={cn('hidden md:flex items-center gap-10 font-light', className)} {...rest}>
            <NavLink href="/" onMouseEnter={() => import('@/app/page')}>
                HOME
            </NavLink>

            <NavLink href="/comercial" onMouseEnter={() => import('@/app/comercial/page')}>
                COMERCIAL
            </NavLink>

            <NavLink href="/institutional" onMouseEnter={() => import('@/app/institutional/page')}>
                INSTITUCIONAL
            </NavLink>

            <NavLink href="/bio" onMouseEnter={() => import('@/app/bio/page')}>
                SOBRE
            </NavLink>

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
