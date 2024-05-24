import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            height: {
                'site-header': 'var(--site-header-height)',
                'site-content': 'calc(100vh - var(--site-header-height))',
            },
            inset: {
                'site-header': 'var(--site-header-height)',
            },
            padding: {
                'site-header': 'var(--site-header-height)',
            },
        },
    },
    plugins: [],
};
export default config;
