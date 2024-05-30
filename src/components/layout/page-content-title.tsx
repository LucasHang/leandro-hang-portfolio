interface PageContentTitleProps {
    title: string;
}

export function PageContentTitle({ title }: PageContentTitleProps) {
    return (
        <div className="flex items-center justify-center h-8 bg-black text-white pt-11 pb-14">
            <h1>{title}</h1>
        </div>
    );
}
