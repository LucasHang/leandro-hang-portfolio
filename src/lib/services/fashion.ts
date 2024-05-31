import graphcms from './graph-client';

import { ArtData, ArtEntity } from '../types/art';

export async function getFashionArts(): Promise<ArtEntity[]> {
    const fashionArtsData = await graphcms.request<{ arts: ArtData[] }>(
        `
            query FashionArts {
                arts(where: {categories_contains_some: fashion}, orderBy: sequence_ASC) {
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
                    }
                }
            }
        `,
    );

    return fashionArtsData.arts.map(({ contents, ...rest }) => ({
        ...rest,
        ...contents[0],
    }));
}
