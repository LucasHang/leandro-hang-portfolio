import graphcms from './graph-client';

import { ArtEntity, ArtData } from '../types/art';

interface HomeInfo {
    video: { url: string; mimeType: string; blured?: { url: string } };
    footerImage: {
        url: string;
        width: number;
        height: number;
        blured?: { url: string };
    };
}

interface HomeInfoData {
    homeInfos: HomeInfo[];
}

export async function getHomeInfo(): Promise<HomeInfo> {
    const homeInfosData = await graphcms.request<HomeInfoData>(
        `
            query HomeInfo {
                homeInfos {
                    video {
                        mimeType
                        url
                        blured {
                            url
                        }
                    }
                    footerImage {
                        url
                        width
                        height
                        blured {
                            url
                        }
                    }
                }
            }
        `,
    );

    return homeInfosData.homeInfos[0];
}

export async function getHomeArts(): Promise<ArtEntity[]> {
    const homeArtsData = await graphcms.request<{ arts: ArtData[] }>(
        `
            query HomeArts {
                arts(where: {categories_contains_some: home}, orderBy: sequence_ASC) {
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

    return homeArtsData.arts.map(({ contents, ...rest }) => ({
        ...rest,
        ...contents[0],
    }));
}
