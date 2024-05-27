import { Header } from '../header/header';

export function BaseLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex flex-col w-full min-h-screen">
            <Header />

            {children}
        </div>
    );
}
