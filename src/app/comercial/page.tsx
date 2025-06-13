import { ArtsGallery } from '@/components/art/gallery';
import { getComercialArts } from '@/lib/services/comercial';

export const revalidate = 3600; // revalidate at most every hour

export default async function ComercialPage() {
    const comercialArts = await getComercialArts();

    return <ArtsGallery arts={comercialArts} />;
}
