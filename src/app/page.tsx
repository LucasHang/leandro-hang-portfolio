import Image from 'next/image';

import { BaseLayout } from '@/components/layout/base-layout';
import { getHomeVideo } from '@/lib/services/home';

export default async function Home() {
    const videoOrGif = await getHomeVideo();

    const isVideo = videoOrGif.mimeType.includes('video');

    return (
        <BaseLayout>
            <main className="flex flex-col">
                <div className="relative w-full min-h-screen">
                    {isVideo ? (
                        <video
                            src={videoOrGif.url}
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                    ) : (
                        <Image src={videoOrGif.url} fill alt="Home Background" unoptimized />
                    )}

                    <div className="absolute left-32 bottom-36">
                        <h1 className="text-4xl">PRODUTOR AUDIOVISUAL</h1>
                    </div>
                </div>
            </main>
        </BaseLayout>
    );
}
