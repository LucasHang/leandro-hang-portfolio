// 'use client';

// import { motion } from 'framer-motion';
// import { usePathname } from 'next/navigation';

export function HeaderSpacer() {
    // const pathname = usePathname();

    // const isHome = pathname === '/';

    // const height = isHome ? 0 : 96; // same as h-site-header

    return (
        // <motion.div
        //     animate={{ height }}
        //     transition={{
        //         type: 'spring',
        //         stiffness: 90,
        //         damping: 18,
        //         duration: 0.8,
        //     }}
        // />
        <div className="h-site-header" />
    );
}
