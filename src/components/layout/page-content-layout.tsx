import { PageContentTitle } from './page-content-title';

import { DeveloperCredits } from '../developer-credits';
import { Footer } from '../footer';

interface PageContentLayoutProps {
    title: string;
    children: React.ReactNode;
}

export function PageContentLayout({ title, children }: PageContentLayoutProps) {
    return (
        <main className="relative min-h-screen w-full">
            <PageContentTitle title={title} />

            {children}

            <Footer />

            <DeveloperCredits />
        </main>
    );
}
