import graphcms from './graph-client';

import { ArtData, ArtEntity } from '../types/art';

export async function getComercialArts(): Promise<ArtEntity[]> {
    const comercialArtsData = await graphcms.request<{ arts: ArtData[] }>(
        `
            query ComercialArts {
                arts(where: {categories_contains_some: comercial}, orderBy: sequence_ASC) {
                    slug
                    name
                    contents {
                        url
                        width
                        mimeType
                        height
                        blured {
                            url
                            width
                            height
                        }
                        youtubeUrl
                    }
                }
            }
        `,
    );

    return comercialArtsData.arts.map(({ contents, ...rest }) => ({
        ...rest,
        ...contents[0],
    }));
}
