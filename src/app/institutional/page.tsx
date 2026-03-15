import { ArtsGallery } from '@/components/art/gallery';
import { PageLayout } from '@/components/layout/page-layout';
import { getInstitutionalArts } from '@/lib/services/institutional';

export const revalidate = 3600; // revalidate at most every hour

export default async function InstitutionalPage() {
    const institutionalArts = await getInstitutionalArts();

    return (
        <PageLayout>
            <ArtsGallery arts={institutionalArts} showBackdropTitle={true} />
        </PageLayout>
    );
}
