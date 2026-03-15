// 'use client';

// import { AnimatePresence, motion } from 'framer-motion';
// import { usePathname } from 'next/navigation';

// export function PageTransition({ children }: { children: React.ReactNode }) {
//     const pathname = usePathname();

//     return (
//         <div className="relative min-h-screen w-full overflow-hidden">
//             <AnimatePresence mode="wait" initial={false}>
//                 <motion.div
//                     key={pathname}
//                     className="absolute inset-0 will-change-transform"
//                     initial={{ y: '100%' }}
//                     animate={{ y: 0 }}
//                     exit={{ y: '-100%', scale: 0.98, opacity: 0.95, filter: 'blur(4px)' }}
//                     transition={{
//                         duration: 0.9,
//                         ease: [0.65, 0, 0.35, 1],
//                     }}
//                 >
//                     {children}
//                 </motion.div>
//             </AnimatePresence>
//         </div>
//     );
// }

'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { useRef } from 'react';

export function PageTransition({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const prevPath = useRef(pathname);

    const isNewPage = prevPath.current !== pathname;
    prevPath.current = pathname;

    return (
        <div className="relative min-h-screen w-full overflow-hidden">
            <AnimatePresence mode="popLayout" initial={false}>
                <motion.div
                    key={pathname}
                    className="absolute inset-0 will-change-transform"
                    initial={isNewPage ? { y: '100%' } : false}
                    animate={{ y: 0 }}
                    exit={{ y: '-100%' }}
                    transition={{
                        duration: 0.9,
                        ease: [0.65, 0, 0.35, 1],
                    }}
                >
                    {children}
                </motion.div>
            </AnimatePresence>
        </div>
    );
}
