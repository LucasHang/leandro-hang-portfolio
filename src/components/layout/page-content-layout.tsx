import { PageContentTitle } from './page-content-title';

import { DeveloperCredits } from '../developer-credits';
import { Footer } from '../footer';

interface PageContentLayoutProps {
    title: string;
    children: React.ReactNode;
}

export function PageContentLayout({ title, children }: PageContentLayoutProps) {
    return (
        <main className="relative h-site-content pt-site-header w-full">
            <PageContentTitle title={title} />

            {children}

            <Footer />

            <DeveloperCredits />
        </main>
    );
}
