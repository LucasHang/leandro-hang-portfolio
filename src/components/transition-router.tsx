'use client';

import { useRouter, usePathname } from 'next/navigation';
import { createContext, useContext, useEffect, useState } from 'react';

type RouterContextType = {
    route: string;
    navigate: (path: string) => void;
};

const RouterContext = createContext<RouterContextType | null>(null);

export function TransitionRouter({ children }: { children: React.ReactNode }) {
    const router = useRouter();
    const pathname = usePathname();

    const [route, setRoute] = useState(pathname);
    const [transitioning, setTransitioning] = useState(false);

    const navigate = (path: string) => {
        if (path === route || transitioning) return;

        setTransitioning(true);

        window.scrollTo({ top: 0, behavior: 'instant' });

        setRoute(path);
        router.push(path);

        setTimeout(() => {
            setTransitioning(false);
        }, 900);
    };

    useEffect(() => {
        if (transitioning) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }, [transitioning]);

    return <RouterContext.Provider value={{ route, navigate }}>{children}</RouterContext.Provider>;
}

export function useTransitionRouter() {
    const ctx = useContext(RouterContext);
    if (!ctx) throw new Error('Router not mounted');
    return ctx;
}
