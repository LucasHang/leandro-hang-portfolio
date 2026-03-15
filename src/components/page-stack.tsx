// 'use client';

// import { motion } from 'framer-motion';
// import { useEffect, useState } from 'react';
// import { useTransitionRouter } from './transition-router';

// export function PageStack({ pages }: { pages: { path: string; element: React.ReactNode }[] }) {
//     const { route } = useTransitionRouter();

//     const [current, setCurrent] = useState(route);
//     const [prev, setPrev] = useState<string | null>(null);

//     useEffect(() => {
//         if (route !== current) {
//             setPrev(current);
//             setCurrent(route);

//             const timeout = setTimeout(() => {
//                 setPrev(null);
//             }, 900);

//             return () => clearTimeout(timeout);
//         }
//     }, [route, current]);

//     return (
//         <div className="relative w-full min-h-screen overflow-hidden">
//             {pages.map(page => {
//                 const isCurrent = page.path === current;
//                 const isPrev = page.path === prev;

//                 if (!isCurrent && !isPrev) return null;

//                 return (
//                     <motion.div
//                         key={page.path}
//                         className="absolute inset-0 overflow-y-auto [backface-visibility:hidden] transform-gpu will-change-transform"
//                         initial={{
//                             y: isCurrent ? '100%' : 0,
//                             opacity: isCurrent ? 1 : 1,
//                         }}
//                         animate={{
//                             y: isCurrent ? 0 : '-120%',
//                             opacity: isCurrent ? 1 : 0,
//                         }}
//                         transition={{
//                             y: { duration: 0.9, ease: [0.65, 0, 0.35, 1] },
//                             opacity: { duration: 0.5, ease: 'easeOut' },
//                         }}
//                         onAnimationComplete={() => {
//                             if (!isCurrent) {
//                                 // reset hidden page below viewport
//                                 const el = document.getElementById(`page-${page.path}`);
//                                 if (el) el.style.transform = 'translateY(100%)';
//                             }
//                         }}
//                         id={`page-${page.path}`}
//                     >
//                         {page.element}
//                     </motion.div>
//                 );
//             })}
//         </div>
//     );
// }

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
