import { getInstitutionalArts } from '@/lib/services/institutional';

import { ArtsGallery } from '../art/gallery';
import { PageLayout } from '../layout/page-layout';

export default async function InstitutionalPageContent() {
    const institutionalArts = await getInstitutionalArts();

    return (
        <PageLayout>
            <ArtsGallery arts={institutionalArts} pageTitle="Institutional" />
        </PageLayout>
    );
}
