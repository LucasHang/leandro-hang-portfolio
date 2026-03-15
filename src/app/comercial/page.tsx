import { ArtsGallery } from '@/components/art/gallery';
import { PageLayout } from '@/components/layout/page-layout';
import { getComercialArts } from '@/lib/services/comercial';

export const revalidate = 3600; // revalidate at most every hour

export default async function ComercialPage() {
    const comercialArts = await getComercialArts();

    return (
        <PageLayout>
            <ArtsGallery arts={comercialArts} />
        </PageLayout>
    );
}
