import Image from 'next/image';

import { VideoArt } from '@/components/art/video-art';
import { getBioInfo } from '@/lib/services/bio';

import { BioArt } from './bio-art';

export const revalidate = 3600; // revalidate at most every hour

export default async function BioPage() {
    const bioInfo = await getBioInfo();

    console.log(JSON.stringify(bioInfo, null, 2));

    const isVideo = bioInfo.image.mimeType.includes('video') || !!bioInfo.image.youtubeUrl;

    return (
        <div>
            <div className="relative w-full h-[70vh] max-h-[646px]">
                {isVideo ? (
                    <BioArt bioInfoImage={bioInfo.image} />
                ) : (
                    // bioInfo.image.youtubeUrl ? (
                    //     <iframe
                    //         width="100%"
                    //         height="100%"
                    //         allow="autoplay; fullscreen; picture-in-picture"
                    //         src={`${bioInfo.image.youtubeUrl}?autoplay=1&controls=2&iv_load_policy=3&modestbranding=1&rel=0&showinfo=0`}
                    //     ></iframe>
                    // ) : (
                    //     <video
                    //         src={bioInfo.image.url}
                    //         autoPlay
                    //         loop
                    //         muted
                    //         playsInline
                    //         className="absolute inset-0 w-full h-full object-cover object-center"
                    //     />
                    // )
                    <Image
                        src={bioInfo.image.url}
                        alt="Bio Background"
                        fill
                        className="object-cover object-center"
                    />
                )}
            </div>

            <div className="flex items-center justify-center h-16 bg-black text-white text-center px-2 font-light">
                <span>
                    &quot;Se você ama cinema, existe apenas uma maneira de ver os filmes: na tela grande.&quot;
                </span>
            </div>
        </div>
    );
}
