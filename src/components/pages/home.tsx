import Image from 'next/image';

import { getHomeInfo } from '@/lib/services/home';

import { Header } from '../header/header';
import { LogoAnimated } from '../home/logo-animated';

export default async function HomePageContent() {
    const homeInfo = await getHomeInfo();

    const { video: videoOrGif } = homeInfo;

    const isVideo = videoOrGif.mimeType.includes('video');

    return (
        <>
            {isVideo ? (
                <video
                    src={videoOrGif.url}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover object-center"
                />
            ) : (
                <Image
                    src={videoOrGif.url}
                    fill
                    alt="Home Background"
                    unoptimized
                    placeholder="blur"
                    blurDataURL={videoOrGif.blured ? videoOrGif.blured.url : videoOrGif.url}
                    className="object-cover object-center"
                />
            )}

            <div className="absolute top-0 bg-gradient-to-b from-black to-transparent h-56 w-full hidden md:block" />

            <div className="absolute bottom-0 bg-gradient-to-t from-black to-transparent h-56 w-full hidden md:block" />

            <LogoAnimated />

            <Header className="bg-transparent bottom-10 top-auto backdrop-blur-none hidden md:flex" />

            <Header className="md:hidden" />
        </>
    );
}
