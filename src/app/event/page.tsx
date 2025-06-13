import { ArtsGallery } from '@/components/art/gallery';
import { getEventArts } from '@/lib/services/event';

export const revalidate = 3600; // revalidate at most every hour

export default async function EventPage() {
    const eventArts = await getEventArts();

    return <ArtsGallery arts={eventArts} />;
}
