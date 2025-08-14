'use client';

import { VideoArt } from '@/components/art/video-art';
import { BioInfoImage } from '@/lib/services/bio';

type BioArtProps = {
    bioInfoImage: BioInfoImage;
};

export function BioArt({ bioInfoImage }: BioArtProps) {
    return (
        <VideoArt
            art={bioInfoImage}
            photo={{
                src: bioInfoImage.url, // Mesmo quando é um video, o src é a thumbnail
                width: bioInfoImage.width || bioInfoImage.blured?.width || 16,
                height: bioInfoImage.height || bioInfoImage.blured?.height || 9,
                alt: 'Video de bio mostrando a historia da Leandro Hang produtora',
                /** @ts-expect-error blurDataURL exists sometimes */
                blurDataURL: bioInfoImage.blured?.url || bioInfoImage.url,
            }}
            wrapperStyle={{
                width: '100%',
                height: '100%',
            }}
            imageProps={{
                alt: 'Video de bio mostrando a historia da Leandro Hang produtora',
                title: 'Video de bio mostrando a historia da Leandro Hang produtora',
                src: bioInfoImage.url,
                width: bioInfoImage.width,
                height: bioInfoImage.height,
                style: {
                    width: bioInfoImage.width,
                    height: bioInfoImage.height,
                },
                className: 'object-contain object-center md:object-cover',
                sizes: '',
                onClick: () => {},
            }}
        />
    );
}
