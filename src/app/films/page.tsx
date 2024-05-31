import { ArtsGallery } from '@/components/art/gallery';
import { getFilmsArts } from '@/lib/services/films';

export default async function FilmsPage() {
    const filmsArts = await getFilmsArts();

    return <ArtsGallery arts={filmsArts} />;
}
