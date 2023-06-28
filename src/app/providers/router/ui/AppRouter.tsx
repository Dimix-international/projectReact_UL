import React, { memo, Suspense, useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';
import { PageLoader } from '@/widgets/PageLoader/ui/PageLoader';
import { RequireAuth } from '@/app/providers/router/ui/RequireAuth';
import { routeConfig } from '@/app/providers/router/config/routeConfig';
import { AppRoutesProps } from '@/shared/types/router';

export const AppRouter = memo(() => {
    const renderWithWrapper = useCallback(
        (route: AppRoutesProps) => (
            <Route
                key={route.path}
                path={route.path}
                element={
                    route?.authOnly ? (
                        <RequireAuth roles={route.roles}>
                            <>{route.element}</>
                        </RequireAuth>
                    ) : (
                        route.element
                    )
                }
            />
        ),
        [],
    );

    return (
        <Suspense fallback={<PageLoader />}>
            <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>
        </Suspense>
    );
});
