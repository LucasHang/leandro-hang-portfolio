// components/InfiniteLogoCarousel.jsx
import Image from 'next/image';
import Marquee from 'react-fast-marquee';

type InfiniteLogoCarouselProps = {
    logos: {
        url: string;
        width: number;
        height: number;
        alt?: string;
    }[];
};

const InfiniteLogoCarousel = ({ logos }: InfiniteLogoCarouselProps) => {
    // Duplicate the logos array to create seamless infinite scroll
    const duplicatedLogos = [...logos, ...logos];

    return (
        <Marquee
            gradient={true}
            gradientColor="black"
            gradientWidth={100}
            speed={40}
            pauseOnHover={true}
            autoFill={true}
            className="py-8 overflow-hidden"
        >
            {logos.map((logo, index) => (
                <div key={index} className="mx-12">
                    <Image
                        src={logo.url}
                        alt={logo.alt || 'Logo'}
                        width={logo.width || 120}
                        height={logo.height || 60}
                        className="object-contain h-28"
                    />
                </div>
            ))}
        </Marquee>
    );
};

export default InfiniteLogoCarousel;
