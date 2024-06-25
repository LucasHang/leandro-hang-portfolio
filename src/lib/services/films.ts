import graphcms from './graph-client';

import { ArtData, ArtEntity } from '../types/art';

export async function getFilmsArts(): Promise<ArtEntity[]> {
    const filmsArtsData = await graphcms.request<{ arts: ArtData[] }>(
        `
            query FilmsArts {
                arts(where: {categories_contains_some: films}, orderBy: sequence_ASC) {
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

    return filmsArtsData.arts.map(({ contents, ...rest }) => ({
        ...rest,
        ...contents[0],
    }));
}
