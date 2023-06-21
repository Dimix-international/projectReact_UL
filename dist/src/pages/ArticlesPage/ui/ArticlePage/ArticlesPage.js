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
import { jsx as _jsx } from "react/jsx-runtime";
import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { DynamicModuleLoader } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { Page } from 'widgets/Page/Page';
import { ArticleInfiniteList } from 'pages/ArticlesPage/ui/ArticleInfiniteList/ArticleInfiniteList';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { initArticlesPage } from 'pages/ArticlesPage/model/services/initArticlesPage/initArticlesPage';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSearchParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { articlesListLoading } from 'pages/ArticlesPage/model/selectors/articlesList';
import { articlePageReducer } from '../../model/slice/articlePageSlice';
var reducers = {
    articlesPage: articlePageReducer,
};
var ArticlesPage = function (_a) {
    var className = _a.className;
    var dispatch = useAppDispatch();
    var searchParams = useSearchParams()[0];
    var isLoading = useSelector(articlesListLoading);
    useInitialEffect(function () {
        dispatch(initArticlesPage(searchParams));
    });
    if (isLoading) {
        return null;
    }
    return (_jsx(DynamicModuleLoader, __assign({ reducers: reducers, removeAfterUnmount: false }, { children: _jsx(Page, __assign({ className: classNames('', {}, [className]) }, { children: _jsx(ArticleInfiniteList, {}) })) })));
};
export default memo(ArticlesPage);
