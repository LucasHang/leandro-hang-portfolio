import { Instagram } from 'lucide-react';
import Image from 'next/image';

import { Art } from '@/components/art/art';
import { DeveloperCredits } from '@/components/developer-credits';
import { BaseLayout } from '@/components/layout/base-layout';
import { siteConfig } from '@/lib/config/site-config';
import { getHomeArts, getHomeInfo } from '@/lib/services/home';

export default async function Home() {
    const [homeInfo, homeArts] = await Promise.all([getHomeInfo(), getHomeArts()]);

    const { video: videoOrGif, footerImage } = homeInfo;

    const isVideo = videoOrGif.mimeType.includes('video');

    return (
        <BaseLayout>
            <div className="absolute inset-0">
                {isVideo ? (
                    <video
                        preload="metadata"
                        src={videoOrGif.url}
                        autoPlay
                        loop
                        muted
                        playsInline
                        poster={videoOrGif.blured ? videoOrGif.blured.url : undefined}
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

                <div className="absolute md:left-32 left-20 bottom-36">
                    <h1 className="text-4xl">PRODUTOR AUDIOVISUAL</h1>
                </div>
            </div>

            <main className="flex flex-col pt-site-content">
                <div className="row-1 gap-1 my-1 md:columns-2 xl:columns-3">
                    {homeArts.map(art => {
                        return <Art key={art.slug} art={art} />;
                    })}
                </div>

                <div className="relative w-full h-[50vh] max-h-[420px]">
                    <Image
                        src={footerImage.url}
                        alt="Home Footer Image"
                        fill
                        placeholder="blur"
                        blurDataURL={footerImage.blured ? footerImage.blured.url : footerImage.url}
                        className="object-cover object-center"
                    />
                </div>
            </main>

            <footer className="flex flex-col">
                <div className="flex items-center justify-center gap-4 min-h-14 py-2 bg-black text-white flex-wrap">
                    <span>{siteConfig.personal.name}</span>
                    <span>|</span>
                    <span>{siteConfig.contact.phoneNumber}</span>
                    <span>|</span>
                    <span>{siteConfig.contact.email}</span>
                </div>

                <div className="h-52 bg-white text-black flex items-center justify-center">
                    <a href={siteConfig.links.instagram} target="_blank" rel="noreferrer">
                        <Instagram className="h-4 w-4" />
                    </a>
                </div>
            </footer>

            <DeveloperCredits />
        </BaseLayout>
    );
}
