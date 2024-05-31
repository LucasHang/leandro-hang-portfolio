import Image from 'next/image';

import { type ArtEntity } from '@/lib/types/art';

interface ImageArtProps {
    art: ArtEntity;
}

export function ImageArt({ art }: ImageArtProps) {
    return (
        <Image
            src={art.url}
            alt={art.name}
            width={art.width}
            height={art.height}
            placeholder="blur"
            blurDataURL={art.blured ? art.blured.url : art.url}
            className="inline-block object-cover object-center"
        />
    );
}
