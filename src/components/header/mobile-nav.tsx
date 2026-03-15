'use client';

import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import { createPortal } from 'react-dom';

import { siteConfig } from '@/lib/config/site-config';
import { cn } from '@/lib/utils';

import logo from '../../../public/images/png/logo.png';
import { Button } from '../ui/button';
import { NavLink } from '../nav-link';

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

            <nav className="flex flex-col gap-14 font-light">
                <NavLink href="/" onClick={() => setIsMenuOpen(false)}>
                    <Image src={logo} alt="Hang Leandro Produtora" className="h-10 w-auto" />
                </NavLink>

                <NavLink href="/" onClick={() => setIsMenuOpen(false)}>
                    HOME
                </NavLink>

                <NavLink href="/fashion" onClick={() => setIsMenuOpen(false)}>
                    FASHION
                </NavLink>

                <NavLink href="/comercial" onClick={() => setIsMenuOpen(false)}>
                    COMERCIAL
                </NavLink>

                <NavLink href="/institutional" onClick={() => setIsMenuOpen(false)}>
                    INSTITUCIONAL
                </NavLink>

                <NavLink href="/bio" onClick={() => setIsMenuOpen(false)}>
                    SOBRE
                </NavLink>

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
