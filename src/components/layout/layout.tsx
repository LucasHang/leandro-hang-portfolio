import { Footer } from '../footer';
import { Header } from '../header/header';

interface LayoutProps {
    children: React.ReactNode;
}

/** This layout applies to all pages except the Home */
export function Layout({ children }: LayoutProps) {
    return (
        <div className="flex flex-col w-full min-h-screen">
            <Header className="backdrop-blur-md bg-black/50" />

            <main className="relative min-h-screen w-full">{children}</main>

            <Footer />
        </div>
    );
}
