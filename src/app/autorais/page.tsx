import { ArtsGallery } from '@/components/art/gallery';
import { getAutoraisArts } from '@/lib/services/autorais';

export const revalidate = 3600; // revalidate at most every hour

export default async function AutoraisPage() {
    const autoraisArts = await getAutoraisArts();

    return <ArtsGallery arts={autoraisArts} />;
}
