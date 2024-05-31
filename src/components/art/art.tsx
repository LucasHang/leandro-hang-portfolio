import { type ArtEntity } from '@/lib/types/art';

import { ImageArt } from './image-art';
import { VideoArt } from './video-art';

interface ArtProps {
    art: ArtEntity;
}

export function Art({ art }: ArtProps) {
    if (art.mimeType.includes('video')) {
        return <VideoArt art={art} />;
    }

    return <ImageArt art={art} />;
}
