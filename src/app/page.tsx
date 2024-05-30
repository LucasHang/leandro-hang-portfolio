import { Instagram } from 'lucide-react';
import Image from 'next/image';

import { DeveloperCredits } from '@/components/developer-credits';
import { BaseLayout } from '@/components/layout/base-layout';
import { siteConfig } from '@/lib/config/site-config';
import { getHomeInfo } from '@/lib/services/home';

export default async function Home() {
    const { video: videoOrGif, footerImage } = await getHomeInfo();

    const isVideo = videoOrGif.mimeType.includes('video');

    return (
        <BaseLayout>
            <div className="absolute inset-0">
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
                        className="object-cover object-center"
                    />
                )}

                <div className="absolute left-32 bottom-36">
                    <h1 className="text-4xl">PRODUTOR AUDIOVISUAL</h1>
                </div>
            </div>

            <main className="flex flex-col pt-site-content">
                <div className="grid grid-cols-2 gap-1">
                    {new Array(6).fill(1).map((_, i) => (
                        <div key={i} className="h-96 w-full bg-gray-800" />
                    ))}
                </div>
            </main>

            <div className="relative w-full h-[50vh] max-h-[420px]">
                <Image
                    src={footerImage.url}
                    alt="Home Footer Image"
                    fill
                    className="object-cover object-center"
                />
            </div>

            <footer className="flex flex-col">
                <div className="flex items-center justify-center gap-4 h-16 bg-black text-white">
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
