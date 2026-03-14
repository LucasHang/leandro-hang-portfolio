import { Instagram, Mail } from 'lucide-react';
import Image from 'next/image';

import InfiniteLogoCarousel from '@/components/infinite-logos-carousel';
import { siteConfig } from '@/lib/config/site-config';
import { getBioInfo } from '@/lib/services/bio';

import { BioArt } from './bio-art';

import logo from '../../../public/images/png/logo.png';

export const revalidate = 3600; // revalidate at most every hour

export default async function BioPage() {
    const bioInfo = await getBioInfo();

    const isVideo = bioInfo.image.mimeType.includes('video') || !!bioInfo.image.youtubeUrl;

    return (
        <div>
            <div className="relative w-full h-[60vh] max-h-[646px]">
                {isVideo ? (
                    <BioArt bioInfoImage={bioInfo.image} />
                ) : (
                    <div className="flex flex-col items-center justify-center gap-14 h-full py-8 px-4">
                        <Image
                            src={bioInfo.image.url}
                            alt="Bio Background"
                            fill
                            className="object-cover object-center -z-10"
                        />

                        <Image src={logo} alt="Acourt Filmes Produtora" className="md:h-24 h-14 w-auto" />

                        <div className="flex flex-col items-center md:text-sm text-xs">
                            <p className="max-w-4xl text-center">
                                Essa é a ACOURT FILMES, uma Produtora Audiovisual fundada por Leandro Hang e
                                Jordana S. Bittencourt. Eles acreditam em contar histórias através da narração,
                                da autenticidade e da imaginação.
                            </p>
                            <br />
                            <p className="max-w-7xl text-center">
                                A ACOURT FILMES carrega um amor genuíno pela cinematografia e pelo cinema,
                                encara cada projeto como uma oportunidade única de criar uma história visual
                                envolvente.
                            </p>
                            <p className="max-w-5xl text-center">
                                Ela prioriza a luz natural e a composição dinâmica, utilizando design de som,
                                música, captação e edição autorais para criar filmes vibrantes.
                            </p>
                            <br />
                            <p className="max-w-5xl text-center">
                                Atuando em filmes de moda, publicidade e institucional, seus filmes combinam
                                precisão editorial com autenticidade emocional.
                            </p>
                            <br />
                            <br />
                            <p className="text-sm italic text-center">
                                &ldquo;Se você ama cinema, existe apenas uma maneira de ver os filmes: na tela
                                grande.&rdquo;
                            </p>
                        </div>
                    </div>
                )}
            </div>

            <div className="flex justify-center items-center gap-4">
                <a href={siteConfig.links.instagram} target="_blank" rel="noreferrer">
                    <Instagram className="h-5 w-5" />
                </a>
                <a href={`mailto:${siteConfig.contact.email}`}>
                    <Mail className="h-5 w-5" />
                </a>
                <a
                    href={`https://wa.me/${siteConfig.contact.phoneNumber.raw}`}
                    target="_blank"
                    rel="noreferrer"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1024 1024"
                        fill="currentColor"
                        className="h-5 w-5"
                    >
                        <defs></defs>
                        <path d="M713.5 599.9c-10.9-5.6-65.2-32.2-75.3-35.8-10.1-3.8-17.5-5.6-24.8 5.6-7.4 11.1-28.4 35.8-35 43.3-6.4 7.4-12.9 8.3-23.8 2.8-64.8-32.4-107.3-57.8-150-131.1-11.3-19.5 11.3-18.1 32.4-60.2 3.6-7.4 1.8-13.7-1-19.3-2.8-5.6-24.8-59.8-34-81.9-8.9-21.5-18.1-18.5-24.8-18.9-6.4-0.4-13.7-0.4-21.1-0.4-7.4 0-19.3 2.8-29.4 13.7-10.1 11.1-38.6 37.8-38.6 92s39.5 106.7 44.9 114.1c5.6 7.4 77.7 118.6 188.4 166.5 70 30.2 97.4 32.8 132.4 27.6 21.3-3.2 65.2-26.6 74.3-52.5 9.1-25.8 9.1-47.9 6.4-52.5-2.7-4.9-10.1-7.7-21-13z"></path>
                        <path d="M925.2 338.4c-22.6-53.7-55-101.9-96.3-143.3-41.3-41.3-89.5-73.8-143.3-96.3C630.6 75.7 572.2 64 512 64h-2c-60.6 0.3-119.3 12.3-174.5 35.9-53.3 22.8-101.1 55.2-142 96.5-40.9 41.3-73 89.3-95.2 142.8-23 55.4-34.6 114.3-34.3 174.9 0.3 69.4 16.9 138.3 48 199.9v152c0 25.4 20.6 46 46 46h152.1c61.6 31.1 130.5 47.7 199.9 48h2.1c59.9 0 118-11.6 172.7-34.3 53.5-22.3 101.6-54.3 142.8-95.2 41.3-40.9 73.8-88.7 96.5-142 23.6-55.2 35.6-113.9 35.9-174.5 0.3-60.9-11.5-120-34.8-175.6z m-151.1 438C704 845.8 611 884 512 884h-1.7c-60.3-0.3-120.2-15.3-173.1-43.5l-8.4-4.5H188V695.2l-4.5-8.4C155.3 633.9 140.3 574 140 513.7c-0.4-99.7 37.7-193.3 107.6-263.8 69.8-70.5 163.1-109.5 262.8-109.9h1.7c50 0 98.5 9.7 144.2 28.9 44.6 18.7 84.6 45.6 119 80 34.3 34.3 61.3 74.4 80 119 19.4 46.2 29.1 95.2 28.9 145.8-0.6 99.6-39.7 192.9-110.1 262.7z" />
                    </svg>
                </a>
            </div>

            <div className="flex flex-col">
                <p className="text-center font-bold text-[#374256] text-lg mt-12">ACOURT FILMES ATENDE</p>

                <InfiniteLogoCarousel logos={bioInfo.logosClientes} />
            </div>
        </div>
    );
}
