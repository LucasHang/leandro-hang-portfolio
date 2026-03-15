'use client';

import { motion } from 'framer-motion';
import { Instagram } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { useIsDesktop } from '@/hooks/use-is-desktop';
import { siteConfig } from '@/lib/config/site-config';
import { cn } from '@/lib/utils';

import { MobileHeaderNav } from './mobile-nav';
import { HeaderNav } from './nav';

import logo from '../../../public/images/png/logo.png';

export interface HeaderProps extends React.HTMLAttributes<HTMLElement> {}

export function Header({ className }: HeaderProps) {
    const pathname = usePathname();
    const isDesktop = useIsDesktop();

    const isHomePage = pathname === '/';

    const shouldBeBottom = isDesktop && isHomePage;

    return (
        /** ts-expect-error not receiving motion props in rest */
        <motion.header
            layout
            layoutScroll
            animate={{
                top: shouldBeBottom ? 'auto' : 0,
                bottom: shouldBeBottom ? 40 : 'auto',
            }}
            transition={{
                type: 'spring',
                stiffness: 90,
                damping: 18,
                delay: 0.2,
            }}
            className={cn(
                'h-site-header flex items-center justify-between md:justify-center gap-4 px-16 z-50 w-full fixed left-0 right-0',
                shouldBeBottom ? 'bg-transparent' : 'backdrop-blur-md bg-black/50',
                className,
            )}
        >
            <Link href="/">
                <Image src={logo} alt="Acourt Filmes Produtora" className="md:hidden h-10 w-auto" />
            </Link>

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
        </motion.header>
    );
}
