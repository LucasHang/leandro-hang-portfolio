import { ArtsGallery } from '@/components/art/gallery';
import { getFashionArts } from '@/lib/services/fashion';

export const revalidate = 3600; // revalidate at most every hour

export default async function FashionPage() {
    const fashionArts = await getFashionArts();

    return <ArtsGallery arts={fashionArts} />;
}
