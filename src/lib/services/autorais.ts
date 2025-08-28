import graphcms from './graph-client';

import { ArtData, ArtEntity } from '../types/art';

export async function getAutoraisArts(): Promise<ArtEntity[]> {
    const autoraisArtsData = await graphcms.request<{ arts: ArtData[] }>(
        `
            query AutoraisArts {
                arts(where: {categories_contains_some: autorais}, orderBy: sequence_ASC) {
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

    return autoraisArtsData.arts.map(({ contents, ...rest }) => ({
        ...rest,
        ...contents[0],
    }));
}
