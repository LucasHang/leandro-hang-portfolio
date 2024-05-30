import graphcms from './graph-client';

interface HomeInfo {
    video: { url: string; mimeType: string };
    footerImage: {
        url: string;
        width: number;
        height: number;
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
                    }
                    footerImage {
                        url
                        width
                        height
                    }
                }
            }
        `,
    );

    return homeInfosData.homeInfos[0];
}
