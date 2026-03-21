import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

import { siteConfig } from './config/site-config';
import { ArtEntity } from './types/art';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function generateArtsGallerySchema(pageTitle: string, arts: ArtEntity[]) {
    const items = arts.map(art => {
        const base = {
            name: art.name,
            description: art.description || `${art.name} - trabalho audiovisual`,
            inLanguage: 'pt-BR',
            creator: {
                '@type': 'Organization',
                name: siteConfig.name,
                url: siteConfig.url,
                logo: 'https://sa-east-1.graphassets.com/A9JzQr5c4QpGJkNhtk2MXz/cmmznrj3313jz06lqedgdurbz',
            },
            publisher: {
                '@type': 'Organization',
                name: siteConfig.name,
                url: siteConfig.url,
                logo: 'https://sa-east-1.graphassets.com/A9JzQr5c4QpGJkNhtk2MXz/cmmznrj3313jz06lqedgdurbz',
            },
        };

        // VIDEO
        if (art.mimeType.startsWith('video') || art.youtubeUrl) {
            let source = {
                contentUrl: art.url,
                embedUrl: art.url,
            };

            if (art.youtubeUrl) {
                const youtube = art.youtubeUrl && parseYouTube(art.youtubeUrl);
                const vimeo = art.youtubeUrl && parseVimeo(art.youtubeUrl);

                source = youtube || vimeo || source;
            }

            return {
                '@type': 'VideoObject',
                ...base,
                thumbnailUrl: art.blured?.url || art.url,
                contentUrl: source?.contentUrl || source?.contentUrl || art.youtubeUrl || art.url,
                embedUrl: source?.embedUrl || source?.embedUrl || art.youtubeUrl || art.url,
            };
        }

        // IMAGE
        return {
            '@type': 'VisualArtwork',
            ...base,
            image: art.url,
        };
    });

    return {
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        name: `${pageTitle} - ${siteConfig.name} ${siteConfig.description}`,
        inLanguage: 'pt-BR',
        hasPart: items,
    };
}

/**
 * Extract YouTube video ID from multiple formats
 */
function extractYouTubeId(url: string) {
    const match =
        url.match(/youtu\.be\/([^?]+)/) ||
        url.match(/youtube\.com\/watch\?v=([^&]+)/) ||
        url.match(/youtube\.com\/embed\/([^?]+)/);

    return match?.[1];
}

/**
 * Normalize YouTube URLs
 */
function parseYouTube(url: string) {
    const id = extractYouTubeId(url);

    if (!id) {
        return {
            contentUrl: url,
            embedUrl: url,
        };
    }

    return {
        contentUrl: `https://www.youtube.com/watch?v=${id}`,
        embedUrl: `https://www.youtube.com/embed/${id}`,
    };
}

/**
 * Extract Vimeo ID
 */
function extractVimeoId(url: string) {
    const match = url.match(/vimeo\.com\/(\d+)/);
    return match?.[1];
}

/**
 * Normalize Vimeo URLs
 */
function parseVimeo(url: string) {
    const id = extractVimeoId(url);

    if (!id) {
        return {
            contentUrl: url,
            embedUrl: url,
        };
    }

    return {
        contentUrl: `https://vimeo.com/${id}`,
        embedUrl: `https://player.vimeo.com/video/${id}`,
    };
}
