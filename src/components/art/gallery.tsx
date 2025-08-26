'use client';

import FsLightbox from 'fslightbox-react';
import { useState } from 'react';
import PhotoAlbum from 'react-photo-album';

import { ArtEntity } from '@/lib/types/art';

import { ImageArt } from './image-art';
import { VideoArt } from './video-art';

interface ArtsGalleryProps {
    arts: ArtEntity[];
    useLightBox?: boolean;
}

export function ArtsGallery({ arts, useLightBox }: ArtsGalleryProps) {
    const [lightBoxController, setLightBoxController] = useState({
        toggler: false,
        slide: 1,
    });

    function openLightBoxOnSlide(slideNumber: number) {
        setLightBoxController({
            toggler: !lightBoxController.toggler,
            slide: slideNumber,
        });
    }

    return (
        <>
            <PhotoAlbum
                layout="rows"
                photos={arts.map(a => ({
                    src: a.url, // Mesmo quando é um video, o src é a thumbnail
                    width: a.width || a.blured?.width || 16,
                    height: a.height || a.blured?.height || 9,
                    key: a.slug,
                    alt: a.name,
                    blurDataURL: a.blured?.url || a.url,
                    // sizes: ['(min-width: 480px) 100vw,(min-width: 1024px) 50vw,100vw'],
                }))}
                spacing={4}
                targetRowHeight={520}
                sizes={{
                    size: 'calc(100vw - 240px)',
                    sizes: [{ viewport: '(max-width: 960px)', size: '100vw' }],
                }}
                onClick={useLightBox ? ({ index }) => openLightBoxOnSlide(index + 1) : undefined}
                renderPhoto={props => {
                    const respectiveArt = arts[props.layout.index];

                    const isVideo =
                        (respectiveArt.mimeType && respectiveArt.mimeType.includes('video')) ||
                        respectiveArt.youtubeUrl;

                    if (isVideo) {
                        // @ts-expect-error
                        return <VideoArt art={respectiveArt} {...props} />;
                    }

                    // @ts-expect-error
                    return <ImageArt {...props} />;
                }}
            />

            {useLightBox && (
                <FsLightbox
                    toggler={lightBoxController.toggler}
                    sources={arts.map(a => a.youtubeUrl || a.url)}
                    slide={lightBoxController.slide}
                />
            )}
        </>
    );
}
