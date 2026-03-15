import { Footer } from '../footer';
import { Header } from '../header/header';
import { HeaderSpacer } from '../header/header-spacer';

interface PageLayoutProps {
    children: React.ReactNode;
}

/** This layout applies to all pages except the Home */
export function PageLayout({ children }: PageLayoutProps) {
    return (
        <div className="min-h-screen w-full">
            <Header />

            <HeaderSpacer />

            <main>{children}</main>

            <Footer />
        </div>
    );
}
