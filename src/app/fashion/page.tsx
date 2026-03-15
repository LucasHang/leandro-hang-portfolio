import { ArtsGallery } from '@/components/art/gallery';
import { PageLayout } from '@/components/layout/page-layout';
import { getFashionArts } from '@/lib/services/fashion';

export const revalidate = 3600; // revalidate at most every hour

export default async function FashionPage() {
    const fashionArts = await getFashionArts();

    return (
        <PageLayout>
            <ArtsGallery arts={fashionArts} />
        </PageLayout>
    );
}
