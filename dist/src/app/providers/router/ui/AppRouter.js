var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { Fragment as _Fragment, jsx as _jsx } from "react/jsx-runtime";
import { memo, Suspense, useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';
import { PageLoader } from 'widgets/PageLoader/ui/PageLoader';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';
import { RequireAuth } from 'app/providers/router/ui/RequireAuth';
export var AppRouter = memo(function () {
    var renderWithWrapper = useCallback(function (route) { return (_jsx(Route, { path: route.path, element: (route === null || route === void 0 ? void 0 : route.authOnly)
            ? _jsx(RequireAuth, { children: _jsx(_Fragment, { children: route.element }) })
            : route.element }, route.path)); }, []);
    return (_jsx(Suspense, __assign({ fallback: _jsx(PageLoader, {}) }, { children: _jsx(Routes, { children: Object.values(routeConfig).map(renderWithWrapper) }) })));
});
