import Image from 'next/image';
import { RenderPhotoProps } from 'react-photo-album';

import { ArtEntity } from '@/lib/types/art';

interface ImageArtProps extends RenderPhotoProps {
    art: Pick<ArtEntity, 'name'>;
    showBackdropTitle?: boolean;
}

export function ImageArt({
    photo,
    imageProps: { alt, title, sizes, className, onClick },
    wrapperStyle,
    art,
    showBackdropTitle = false,
}: ImageArtProps) {
    return (
        <div style={{ ...wrapperStyle, position: 'relative' }} className="group">
            <Image
                fill
                src={photo}
                placeholder={'blurDataURL' in photo && photo.blurDataURL ? 'blur' : undefined}
                {...{ alt, title, sizes, className, onClick }}
            />

            {showBackdropTitle && (
                <div className="bg-black/50 backdrop-blur-md grid place-items-center absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
                    <h2 className="text-center">{art.name}</h2>
                </div>
            )}
        </div>
    );
}
