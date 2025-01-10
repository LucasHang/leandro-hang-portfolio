import { ArtsGallery } from '@/components/art/gallery';
import { getFilmsArts } from '@/lib/services/films';

export const revalidate = 3600; // revalidate at most every hour

export default async function FilmsPage() {
    const filmsArts = await getFilmsArts();

    return <ArtsGallery arts={filmsArts} />;
}
