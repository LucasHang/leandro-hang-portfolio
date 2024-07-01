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

    const youtubeUrl = art.youtubeUrl?.includes('youtube') && art.youtubeUrl;

    const vimeoUrl = art.youtubeUrl?.includes('vimeo') && art.youtubeUrl;

    const youtubeVideoId = youtubeUrl ? youtubeUrl.split('v=')[1] : undefined;

    if (youtubeVideoId) {
        return (
            <iframe
                className="inline-block object-cover object-center w-full h-[50vh] max-h-[420px]"
                src={`https://www.youtube.com/embed/${youtubeVideoId}?controls=2&iv_load_policy=3&modestbranding=1&rel=0&showinfo=0`}
            ></iframe>
        );
    }

    if (vimeoUrl) {
        return (
            <div className="relative inline-block object-cover object-center w-full h-[50vh] max-h-[420px]">
                {showControls ? (
                    <iframe
                        key={`${vimeoUrl}-show`}
                        width="100%"
                        height="100%"
                        src={`${vimeoUrl}?badge=0&byline=0&portrait=0&title=0&autoplay=1&quality=1080p`}
                    ></iframe>
                ) : (
                    <iframe
                        key={`${vimeoUrl}-hide`}
                        width="100%"
                        height="100%"
                        src={`${vimeoUrl}?badge=0&byline=0&portrait=0&title=0&autoplay=0&quality=1080p&controls=0&background=1`}
                    ></iframe>
                )}

                {!showControls && (
                    <div
                        className="absolute top-1/2 left-1/2 h-12 w-12 -ml-6 -mt-6 cursor-pointer bg-[url(https://assets.squarespace.com/universal/images-v6/damask/play-button.png)]"
                        onClick={() => setShowControls(true)}
                    />
                )}
            </div>
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
