import { Metadata, ResolvingMetadata } from 'next';

import { getSEOPageData } from '@/lib/services/SEO-page';

export async function generateMetadata(_props: {}, parent: ResolvingMetadata): Promise<Metadata> {
    const seo = await getSEOPageData('institutional');

    const rootOpenGraph = (await parent).openGraph || {};

    return {
        title: seo.title,
        description: seo.description,
        openGraph: {
            ...rootOpenGraph,
            title: seo.title,
            description: seo.description,
        },
    };
}

export default function InstitutionalLayout({ children }: { children: React.ReactNode }) {
    return children;
}
