import { Instagram } from 'lucide-react';
import Image from 'next/image';

import { siteConfig } from '@/lib/config/site-config';
import { cn } from '@/lib/utils';

import { MobileHeaderNav } from './mobile-nav';
import { HeaderNav } from './nav';

import logo from '../../../public/images/png/logo.png';
import { NavLink } from '../nav-link';

export interface HeaderProps extends React.HTMLAttributes<HTMLElement> {}

export function Header({ className }: HeaderProps) {
    return (
        <header
            className={cn(
                'h-site-header flex items-center justify-between md:justify-center gap-4 px-16 z-50 w-full fixed top-0 left-0 right-0 backdrop-blur-md bg-black/50',
                className,
            )}
        >
            <NavLink href="/">
                <Image src={logo} alt="Acourt Filmes Produtora" className="md:hidden h-10 w-auto" />
            </NavLink>

            <div className="flex items-center md:gap-12 gap-8">
                <HeaderNav />

                <MobileHeaderNav />

                <a
                    href={siteConfig.links.instagram}
                    className="block md:hidden"
                    target="_blank"
                    rel="noreferrer"
                >
                    <Instagram className="h-4 w-4" />
                </a>
            </div>
        </header>
    );
}
