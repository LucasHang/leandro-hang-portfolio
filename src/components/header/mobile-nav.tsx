'use client';

import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { createPortal } from 'react-dom';

import { siteConfig } from '@/lib/config/site-config';
import { cn } from '@/lib/utils';

// import logoSvg from '../../../public/images/svg/logo.svg';
import logo from '../../../public/images/png/logo-vertical.png';
import { Button } from '../ui/button';

export function MobileHeaderNav() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="md:hidden block">
            <Button size="icon" variant="ghost" onClick={() => setIsMenuOpen(true)}>
                <Menu className="h-5 w-5" />
            </Button>

            {typeof window !== 'undefined' ? (
                createPortal(<MenuNav isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />, document.body)
            ) : (
                <MenuNav isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
            )}
        </div>
    );
}

interface MenuNavProps {
    isMenuOpen: boolean;
    setIsMenuOpen: (value: boolean) => void;
}

function MenuNav({ isMenuOpen, setIsMenuOpen }: MenuNavProps) {
    const pathname = usePathname();

    return (
        <div
            className={cn(
                'fixed top-0 h-full -right-full bg-black/70 backdrop-blur w-4/5 py-6 px-12 transition-all flex flex-col gap-10 z-[100]',
                { 'right-0': isMenuOpen },
            )}
        >
            <Button size="icon" variant="ghost" className="self-end" onClick={() => setIsMenuOpen(false)}>
                <X className="h-5 w-5" />
            </Button>

            <nav className="flex flex-col gap-14">
                <Link href="/">
                    <Image src={logo} alt="Hang Leandro Logo" className="h-10 w-auto" />
                </Link>
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
                    className="self-center py-3 px-4 rounded-md bg-green-950 text-white font-bold text-sm"
                >
                    ORÇAMENTO
                </a>
            </nav>
        </div>
    );
}
