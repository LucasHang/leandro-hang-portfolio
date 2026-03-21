import { MetadataRoute } from 'next';

// Generates robots.txt dynamically
export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/', // Allow all pages to be crawled
            },
        ],
        sitemap: `https://www.acourtfilmes.com.br/sitemap.xml`,
    };
}
