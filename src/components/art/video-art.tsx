import { type ArtEntity } from '@/lib/types/art';
import { cn } from '@/lib/utils';

interface VideoArtProps {
    art: ArtEntity;
}

export function VideoArt({ art }: VideoArtProps) {
    return (
        <video
            preload="metadata"
            src={art.url}
            width={art.width}
            height={art.height}
            poster={art.blured ? art.blured.url : art.url}
            className={cn('inline-block object-cover object-center', {
                'w-full h-[50vh] max-h-[420px]': !art.blured,
            })}
        />
    );
}
