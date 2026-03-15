'use client';

import { AnimatePresence, motion } from 'framer-motion';

import { useTransitionRouter } from './transition-router';

const transition = {
    duration: 1.5,
    ease: [0.8, 0, 0.6, 1],
};

export function PageStack({ pages }: { pages: { path: string; element: React.ReactNode }[] }) {
    const { route } = useTransitionRouter();

    const page = pages.find(p => p.path === route);

    if (!page) return null;

    return (
        <div className="relative w-full min-h-screen">
            <AnimatePresence mode="popLayout">
                <motion.div
                    key={route}
                    className="absolute inset-0 transform-gpu"
                    initial={{ y: '100%', opacity: 1 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{
                        y: '-100%',
                        opacity: 0,
                        filter: 'blur(10px)',
                    }}
                    /** @ts-expect-error using literal numbers */
                    transition={transition}
                >
                    {page.element}
                </motion.div>
            </AnimatePresence>
        </div>
    );
}
