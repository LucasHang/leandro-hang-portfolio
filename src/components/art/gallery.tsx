'use client';

import FsLightbox from 'fslightbox-react';
import Image from 'next/image';
import { useState } from 'react';
import PhotoAlbum, { RenderPhotoProps } from 'react-photo-album';

import { ArtEntity } from '@/lib/types/art';

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
                    src: a.youtubeUrl || a.url,
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

                    if (respectiveArt.mimeType.includes('video') || respectiveArt.youtubeUrl) {
                        return (
                            <VideoArt
                                key={props.photo.key}
                                src={props.imageProps.src}
                                art={respectiveArt}
                                onClick={
                                    useLightBox ? () => openLightBoxOnSlide(props.layout.index + 1) : undefined
                                }
                                style={props.imageProps.style}
                            />
                        );
                    }

                    // @ts-expect-error
                    return <NextJsImage {...props} />;
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

function NextJsImage({
    photo,
    imageProps: { alt, title, sizes, className, onClick },
    wrapperStyle,
}: RenderPhotoProps) {
    return (
        <div style={{ ...wrapperStyle, position: 'relative' }}>
            <Image
                fill
                src={photo}
                placeholder={'blurDataURL' in photo && photo.blurDataURL ? 'blur' : undefined}
                {...{ alt, title, sizes, className, onClick }}
            />
        </div>
    );
}
