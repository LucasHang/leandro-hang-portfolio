import { CSSProperties } from 'react';

import { type ArtEntity } from '@/lib/types/art';

import { ImageArt } from './image-art';
import { VideoArt } from './video-art';

interface ArtProps {
    src: string;
    art: ArtEntity;
    onClick?: () => void;
    style: CSSProperties;
}

export function Art({ src, art, onClick, style }: ArtProps) {
    if (art.mimeType.includes('video')) {
        return <VideoArt src={src} art={art} onClick={onClick} style={style} />;
    }

    return <ImageArt src={src} art={art} onClick={onClick} style={style} />;
}
