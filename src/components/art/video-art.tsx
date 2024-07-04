'use client';

import Image from 'next/image';
import { useState } from 'react';
import { RenderPhotoProps } from 'react-photo-album';

import { type ArtEntity } from '@/lib/types/art';

interface VideoArtProps extends RenderPhotoProps {
    art: ArtEntity;
}

export function VideoArt({
    art,
    photo,
    imageProps: { alt, title, sizes, className, onClick },
    wrapperStyle,
}: VideoArtProps) {
    const [playVideo, setPlayVideo] = useState(false);

    return (
        <div style={{ ...wrapperStyle, position: 'relative' }}>
            {!playVideo && (
                <Image
                    fill
                    src={photo}
                    placeholder={'blurDataURL' in photo && photo.blurDataURL ? 'blur' : undefined}
                    {...{ alt, title, sizes, className, onClick: () => setPlayVideo(true) }}
                />
            )}

            {!playVideo && (
                <div
                    className="absolute top-1/2 left-1/2 h-12 w-12 -ml-6 -mt-6 cursor-pointer bg-[url(https://assets.squarespace.com/universal/images-v6/damask/play-button.png)]"
                    onClick={() => setPlayVideo(true)}
                />
            )}

            {playVideo && <VideoPlayer art={art} onClick={onClick} />}
        </div>
    );
}

interface VideoPlayerProps {
    art: ArtEntity;
    onClick: RenderPhotoProps['imageProps']['onClick'];
}

function VideoPlayer({ art, onClick }: VideoPlayerProps) {
    const youtubeUrl = art.youtubeUrl?.includes('youtube') && art.youtubeUrl;

    const vimeoUrl = art.youtubeUrl?.includes('vimeo') && art.youtubeUrl;

    if (youtubeUrl) {
        return (
            <iframe
                width="100%"
                height="100%"
                allow="autoplay; fullscreen; picture-in-picture"
                src={`${youtubeUrl}?autoplay=1&controls=2&iv_load_policy=3&modestbranding=1&rel=0&showinfo=0`}
            ></iframe>
        );
    }

    if (vimeoUrl) {
        return (
            <iframe
                width="100%"
                height="100%"
                allow="autoplay; fullscreen; picture-in-picture"
                src={`${vimeoUrl}?badge=0&byline=0&portrait=0&title=0&autoplay=1&quality=1080p`}
            ></iframe>
        );
    }

    return (
        <video
            preload="metadata"
            src={art.url}
            poster={art.blured?.url}
            className="w-full h-full"
            autoPlay
            /** @ts-expect-error */
            onClick={onClick}
        />
    );
}
