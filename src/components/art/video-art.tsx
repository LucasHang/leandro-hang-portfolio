'use client';

import { CSSProperties, useState } from 'react';

import { type ArtEntity } from '@/lib/types/art';
import { cn } from '@/lib/utils';

interface VideoArtProps {
    src: string;
    art: ArtEntity;
    onClick?: () => void;
    style: CSSProperties;
}

export function VideoArt({ src, art, onClick, style }: VideoArtProps) {
    const [showControls, setShowControls] = useState(false);

    const videoId = art.youtubeUrl ? art.youtubeUrl.split('v=')[1] : undefined;

    const poster = art.blured
        ? art.blured.url
        : videoId
        ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
        : src;

    return (
        <video
            // preload="metadata"
            src={src}
            poster={poster}
            className={cn('inline-block object-cover object-center', {
                'w-full h-[50vh] max-h-[420px]': !art.blured,
            })}
            autoPlay={showControls}
            controls={showControls}
            onClick={() => {
                if (onClick) {
                    onClick();
                } else {
                    setShowControls(true);
                }
            }}
            style={style}
        />
    );
}
