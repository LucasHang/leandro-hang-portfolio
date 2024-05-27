'use client';

import ErrorBoundary, { ErrorBoundaryProps } from '@/components/error-boundary';

export default function RootError(props: ErrorBoundaryProps) {
    return <ErrorBoundary {...props} />;
}
