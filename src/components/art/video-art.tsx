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

    if (videoId) {
        return (
            <iframe
                className="inline-block object-cover object-center w-full h-[50vh] max-h-[420px]"
                src={`https://www.youtube.com/embed/${videoId}?controls=2&iv_load_policy=3&modestbranding=1&rel=0&showinfo=0`}
            ></iframe>
        );
    }

    return (
        <video
            preload="metadata"
            src={src}
            poster={art.blured ? art.blured.url : src}
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
