interface ArtData {
    slug: string;
    name: string;
    contents: {
        url: string;
        width: number;
        mimeType: string;
        height: number;
        blured?: {
            url: string;
            width: number;
            height: number;
        };
    }[];
}

type ArtEntity = Omit<ArtData, 'contents'> & ArtData['contents'][0];

export type { ArtEntity, ArtData };
