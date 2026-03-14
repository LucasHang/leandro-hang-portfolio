import Image from 'next/image';

import { Header } from '@/components/header/header';
import { HeaderNav } from '@/components/header/nav';
import { getHomeInfo } from '@/lib/services/home';

import logo from '../../public/images/png/logo.png';

export const revalidate = 3600; // revalidate at most every hour

export default async function Home() {
    const homeInfo = await getHomeInfo();

    const { video: videoOrGif } = homeInfo;

    const isVideo = videoOrGif.mimeType.includes('video');

    return (
        <main className="relative h-screen w-screen flex flex-col items-center justify-between md:shadow">
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

            <div className="absolute top-0 bg-gradient-to-b from-black to-transparent h-56 w-full" />

            <div className="absolute bottom-0 bg-gradient-to-t from-black to-transparent h-56 w-full hidden md:block" />

            <Image
                src={logo}
                alt="Acourt Filmes Produtora"
                className="absolute top-10 left-auto right-auto h-12 w-auto hidden md:block"
            />

            <Header className="md:hidden" />

            <HeaderNav className="absolute bottom-10 left-auto right-auto" />
        </main>
    );
}
