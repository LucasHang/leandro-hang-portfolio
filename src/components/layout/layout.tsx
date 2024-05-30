import { BaseLayout } from './base-layout';
import { PageContentLayout } from './page-content-layout';

interface LayoutProps {
    title: string;
    children: React.ReactNode;
}

/** This layout applies to all pages except the Home */
export function Layout({ title, children }: LayoutProps) {
    return (
        <BaseLayout headerProps={{ className: 'bg-black backdrop-blur-none' }}>
            <PageContentLayout title={title}>{children}</PageContentLayout>
        </BaseLayout>
    );
}
