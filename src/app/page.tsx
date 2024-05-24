import { getHomeVideo } from '@/lib/services/home';
import Image from 'next/image';

export default async function Home() {
    const videoOrGif = await getHomeVideo();

    const isVideo = videoOrGif.mimeType.includes('video');

    return (
        <div className="flex flex-col w-full h-full bg-gray-800">
            {isVideo ? (
                <div className="relative w-full h-screen">
                    <video
                        src={videoOrGif.url}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover"
                    />
                </div>
            ) : (
                <div className="relative w-full h-screen">
                    <Image src={videoOrGif.url} fill alt="Home Background" unoptimized />;
                </div>
            )}

            <div className="h-64">Outros conteúdos aqui</div>
        </div>
    );
}
