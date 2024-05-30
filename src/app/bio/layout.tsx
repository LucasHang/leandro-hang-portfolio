import { Layout } from '@/components/layout/layout';

export default function BioLayout({ children }: { children: React.ReactNode }) {
    return <Layout title="Sobre mim">{children}</Layout>;
}
