import graphcms from './graph-client';

interface BioInfoImage {
    url: string;
    height: number;
    width: number;
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
                        height
                        width
                    }
                }
            }
        `,
    );

    return bioInfosData.bioInfos[0];
}
