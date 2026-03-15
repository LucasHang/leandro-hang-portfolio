'use client';

import { useTransitionRouter } from '@/components/transition-router';
import { cn } from '@/lib/utils';

type NavLinkProps = React.HTMLAttributes<HTMLButtonElement> & {
    href: string;
};

export function NavLink({ href, children, onClick, ...rest }: NavLinkProps) {
    const { navigate, route } = useTransitionRouter();

    return (
        <button
            {...rest}
            onClick={e => {
                navigate(href);
                if (onClick) onClick(e);
            }}
            className={cn({ underline: route === href })}
        >
            {children}
        </button>
    );
}
