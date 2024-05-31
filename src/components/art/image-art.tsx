'use client';

import Image from 'next/image';
import { CSSProperties } from 'react';

import { type ArtEntity } from '@/lib/types/art';

interface ImageArtProps {
    src: string;
    art: ArtEntity;
    onClick?: () => void;
    style: CSSProperties;
}

export function ImageArt({ src, art, onClick, style }: ImageArtProps) {
    return (
        <Image
            src={src}
            alt={art.name}
            width={style.width as number}
            height={style.height as number}
            placeholder="blur"
            blurDataURL={art.blured ? art.blured.url : src}
            className="inline-block object-cover object-center"
            onClick={onClick}
            style={style}
        />
    );
}
