import React, { memo, Suspense, useMemo } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';
import { PageLoader } from 'widgets/PageLoader/ui/PageLoader';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';

export const AppRouter = memo(() => {
    const isAuth = useSelector(getUserAuthData);

    const router = useMemo(
        () => Object.values(routeConfig)
            .filter((route) => !(route.authOnly && !isAuth)),
        [isAuth],
    );

    return (
        <div className="page-wrapper">
            <Suspense fallback={<PageLoader />}>
                <Routes>
                    {
                        router.map(({ element, path }) => (
                            <Route
                                key={path}
                                path={path}
                                element={element}
                            />
                        ))
                    }
                </Routes>
            </Suspense>
        </div>
    );
});
