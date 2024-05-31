import { ArtsGallery } from '@/components/art/gallery';
import { getFashionArts } from '@/lib/services/fashion';

export default async function FashionPage() {
    const fashionArts = await getFashionArts();

    return <ArtsGallery arts={fashionArts} />;
}
