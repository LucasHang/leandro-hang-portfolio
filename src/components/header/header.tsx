import { Instagram } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { siteConfig } from '@/lib/config/site-config';
import { cn } from '@/lib/utils';

import { MobileHeaderNav } from './mobile-nav';
import { HeaderNav } from './nav';

// import logoSvg from '../../../public/images/svg/logo.svg';
import logo from '../../../public/images/png/logo-vertical.png';

export interface HeaderProps extends React.HTMLAttributes<HTMLElement> {}

export function Header({ className, ...rest }: HeaderProps) {
    return (
        <header
            {...rest}
            className={cn(
                'h-site-header flex items-center justify-between gap-4 md:px-20 lg:px-32 px-16 bg-transparent z-50 sticky left-0 top-0 w-full',
                className,
            )}
        >
            <Link href="/">
                <Image src={logo} alt="Hang Leandro Logo" className="h-10 w-auto" />
            </Link>

            <div className="flex items-center md:gap-16 gap-8">
                <HeaderNav />

                <MobileHeaderNav />

                <a href={siteConfig.links.instagram} target="_blank" rel="noreferrer">
                    <Instagram className="h-4 w-4" />
                </a>
            </div>
        </header>
    );
}
