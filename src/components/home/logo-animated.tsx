'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

import logo from '../../../public/images/png/logo.png';

export function LogoAnimated() {
    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                delay: 0.45, // after header animation
                duration: 0.6,
                ease: 'easeOut',
            }}
            className="absolute top-10 left-0 right-0 hidden md:flex justify-center"
        >
            <Image src={logo} alt="Acourt Filmes Produtora" className="h-12 w-auto" />
        </motion.div>
    );
}
