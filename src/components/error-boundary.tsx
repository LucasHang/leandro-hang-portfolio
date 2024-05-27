import { ChevronLeft, RefreshCw, TriangleAlert } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

import { Button } from './ui/button';

export interface ErrorBoundaryProps {
    error: Error & { digest?: string };
    reset: () => void;
    onGoBack?: () => void;
}

export default function ErrorBoundary({ error, reset, onGoBack }: ErrorBoundaryProps) {
    const router = useRouter();

    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error);
    }, [error]);

    return (
        <div className="flex h-full min-h-[50vh] w-full flex-col items-center justify-center gap-4">
            <TriangleAlert className="h-10 w-10" />

            <h2 className="text-xl font-bold">Algo de errado aconteceu</h2>

            <p className="text-center text-muted-foreground">
                Sentimos muito que isso tenha acontecido.
                <br />
                Você pode tentar novamente ou voltar para a página anterior.
            </p>

            <Button variant="outline" className="mt-4 gap-2" onClick={() => reset()}>
                <RefreshCw />
                Tentar novamente
            </Button>

            <Button
                variant="ghost"
                className="gap-2"
                onClick={() => {
                    if (onGoBack) {
                        onGoBack();
                        return;
                    }

                    router.back();
                }}
            >
                <ChevronLeft />
                Voltar para a página anterior
            </Button>
        </div>
    );
}
