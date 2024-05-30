import Image from 'next/image';

import { getBioInfo } from '@/lib/services/bio';

export default async function BioPage() {
    const bioInfo = await getBioInfo();

    return (
        <div>
            <div className="relative w-full h-[70vh] max-h-[646px]">
                <Image
                    src={bioInfo.image.url}
                    alt="Bio Background"
                    fill
                    className="object-cover object-center"
                />
            </div>

            <div className="flex items-center justify-center h-16 bg-black text-white text-center px-2">
                <span>
                    &quot;Se você ama cinema, existe apenas uma maneira de ver os filmes: na tela grande.&quot;
                </span>
            </div>
        </div>
    );
}
