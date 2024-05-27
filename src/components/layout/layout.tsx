import { BaseLayout } from './base-layout';
import { PageContentLayout } from './page-content-layout';

export function Layout({ children }: { children: React.ReactNode }) {
    return (
        <BaseLayout>
            <PageContentLayout>{children}</PageContentLayout>
        </BaseLayout>
    );
}
