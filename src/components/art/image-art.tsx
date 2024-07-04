import Image from 'next/image';
import { RenderPhotoProps } from 'react-photo-album';

interface ImageArtProps extends RenderPhotoProps {}

export function ImageArt({
    photo,
    imageProps: { alt, title, sizes, className, onClick },
    wrapperStyle,
}: ImageArtProps) {
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
