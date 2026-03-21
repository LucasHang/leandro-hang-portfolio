import { getFashionArts } from '@/lib/services/fashion';

import { ArtsGallery } from '../art/gallery';
import { PageLayout } from '../layout/page-layout';

export default async function FashionPageContent() {
    const fashionArts = await getFashionArts();

    return (
        <PageLayout>
            <ArtsGallery arts={fashionArts} pageTitle="Fashion" />
        </PageLayout>
    );
}
