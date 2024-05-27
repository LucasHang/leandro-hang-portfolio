export function PageContentLayout({ children }: { children: React.ReactNode }) {
    return <main className="relative h-site-content pt-site-header w-full">{children}</main>;
}
