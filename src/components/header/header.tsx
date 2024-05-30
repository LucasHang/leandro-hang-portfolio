import { Instagram } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { siteConfig } from '@/lib/config/site-config';
import { cn } from '@/lib/utils';

import { HeaderNav } from './nav';

import logoSvg from '../../../public/images/svg/logo.svg';

export interface HeaderProps extends React.HTMLAttributes<HTMLElement> {}

export function Header({ className, ...rest }: HeaderProps) {
    return (
        <header
            {...rest}
            className={cn(
                'h-site-header flex items-center justify-between px-32 bg-transparent z-50 fixed left-0 top-0 w-full backdrop-blur',
                className,
            )}
        >
            <Link href="/">
                <Image src={logoSvg} alt="Hang Leandro Logo" className="h-10 w-auto" />
            </Link>

            <HeaderNav />

            <a href={siteConfig.links.instagram} target="_blank" rel="noreferrer" className="ml-16">
                <Instagram className="h-4 w-4" />
            </a>
        </header>
    );
}
