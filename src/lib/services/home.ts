import graphcms from './graph-client';

interface HomeVideo {
    url: string;
    mimeType: string;
}

interface HomeVideoData {
    homeVideos: [{ video: HomeVideo }];
}

export async function getHomeVideo(): Promise<HomeVideo> {
    const homeVideoData = await graphcms.request<HomeVideoData>(
        `
            query HomeVideo {
                homeVideos {
                    video {
                        mimeType
                        url
                    }
                }
            }
        `,
    );

    return homeVideoData.homeVideos[0].video;
}
