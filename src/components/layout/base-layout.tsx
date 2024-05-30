import { Header, HeaderProps } from '../header/header';

interface BaseLayoutProps {
    children: React.ReactNode;
    headerProps?: HeaderProps;
}

export function BaseLayout({ children, headerProps }: BaseLayoutProps) {
    return (
        <div className="flex flex-col w-full min-h-screen">
            <Header {...headerProps} />

            {children}
        </div>
    );
}
