import graphcms from './graph-client';

export interface BioInfoImage {
    url: string;
    width: number;
    mimeType: string;
    height: number;
    blured?: {
        url: string;
        width: number;
        height: number;
    };
    youtubeUrl?: string;
}

interface BioInfo {
    image: BioInfoImage;
}

interface BioInfoData {
    bioInfos: BioInfo[];
}

export async function getBioInfo(): Promise<BioInfo> {
    const bioInfosData = await graphcms.request<BioInfoData>(
        `
            query BioInfo {
                bioInfos {
                    image {
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

    return bioInfosData.bioInfos[0];
}
