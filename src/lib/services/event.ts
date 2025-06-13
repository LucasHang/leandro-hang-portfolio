import graphcms from './graph-client';

import { ArtData, ArtEntity } from '../types/art';

export async function getEventArts(): Promise<ArtEntity[]> {
    const eventArtsData = await graphcms.request<{ arts: ArtData[] }>(
        `
            query EventArts {
                arts(where: {categories_contains_some: event}, orderBy: sequence_ASC) {
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

    return eventArtsData.arts.map(({ contents, ...rest }) => ({
        ...rest,
        ...contents[0],
    }));
}
