import { ArtsGallery } from '@/components/art/gallery';
import { getInstitutionalArts } from '@/lib/services/institutional';

export const revalidate = 3600; // revalidate at most every hour

export default async function InstitutionalPage() {
    const institutionalArts = await getInstitutionalArts();

    return <ArtsGallery arts={institutionalArts} />;
}
