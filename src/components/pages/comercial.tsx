import { getComercialArts } from '@/lib/services/comercial';

import { ArtsGallery } from '../art/gallery';
import { PageLayout } from '../layout/page-layout';

export default async function ComercialPageContent() {
    const comercialArts = await getComercialArts();

    return (
        <PageLayout>
            <ArtsGallery arts={comercialArts} pageTitle="Comercial" />
        </PageLayout>
    );
}
