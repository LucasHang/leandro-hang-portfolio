import graphcms from './graph-client';

import { ArtData, ArtEntity } from '../types/art';

export async function getInstitutionalArts(): Promise<ArtEntity[]> {
    const institutionalArtsData = await graphcms.request<{ arts: ArtData[] }>(
        `
            query InstitutionalArts {
                arts(where: {categories_contains_some: institutional}, orderBy: sequence_ASC) {
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

    return institutionalArtsData.arts.map(({ contents, ...rest }) => ({
        ...rest,
        ...contents[0],
    }));
}
