export default async function FashionPage() {
    return (
        <div className="grid grid-cols-2 gap-1">
            {new Array(10).fill(1).map((_, i) => (
                <div key={i} className="h-96 w-full bg-gray-800" />
            ))}
        </div>
    );
}
