import { Header } from './header';

export function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex flex-col w-full min-h-screen">
            <Header />

            {/* relative h-site-content pt-site-header w-full */}
            <main className="flex-1">{children}</main>
        </div>
    );
}
