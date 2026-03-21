import graphcms from './graph-client';

export async function getSEOPageData(categoryPage: string): Promise<{ title: string; description: string }> {
    const data = await graphcms.request<{ seoPage: { title: string; description: string } }>(
        `
            query SEOPageData() {
                seoPage(where: { categoryPage: ${categoryPage} }) {
                    title
                    description
                }
            }
        `,
    );

    return data.seoPage;
}
