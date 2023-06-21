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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { ArticleTypeTabs, ArticleViewSelector, } from 'entities/Article';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Card } from 'shared/ui/Card/Card';
import { Input } from 'shared/ui/Input/Input';
import { ArticleSortSelector } from 'entities/Article/ui/ArticleSortSelector/ArticleSortSelector';
import { useDebounce } from 'shared/lib/hooks/useDebounce/useDebounce';
import { fetchArticlesList } from '../../model/services/fetchArticlesList/fetchArticlesList';
import cls from './ArticlesPageFilters.module.scss';
import { articlesListView, getArticlesListPageSearch, getArticlesListPageOrder, getArticlesListPageSort, getArticlesListPageType, } from '../../model/selectors/articlesList';
import { articlePageActions } from '../../model/slice/articlePageSlice';
export var ArticlesPageFilters = memo(function (props) {
    var className = props.className;
    var t = useTranslation().t;
    var dispatch = useAppDispatch();
    var view = useSelector(articlesListView);
    var sort = useSelector(getArticlesListPageSort);
    var order = useSelector(getArticlesListPageOrder);
    var search = useSelector(getArticlesListPageSearch);
    var type = useSelector(getArticlesListPageType);
    var fetchData = useCallback(function () {
        dispatch(fetchArticlesList({ replace: true }));
    }, [dispatch]);
    var debouncedFetchData = useDebounce(fetchData, 500);
    var onChangeView = useCallback(function (view) {
        dispatch(articlePageActions.setView(view));
    }, [dispatch]);
    var onChangeSort = useCallback(function (newSort) {
        dispatch(articlePageActions.setSort(newSort));
        dispatch(articlePageActions.setPage(1));
        fetchData();
    }, [dispatch, fetchData]);
    var onChangeOrder = useCallback(function (newOrder) {
        dispatch(articlePageActions.setOrder(newOrder));
        dispatch(articlePageActions.setPage(1));
        fetchData();
    }, [dispatch, fetchData]);
    var onChangeSearch = useCallback(function (search) {
        dispatch(articlePageActions.setSearch(search));
        dispatch(articlePageActions.setPage(1));
        debouncedFetchData();
    }, [dispatch, debouncedFetchData]);
    var onChangeType = useCallback(function (value) {
        dispatch(articlePageActions.setType(value));
        dispatch(articlePageActions.setPage(1));
        fetchData();
    }, [dispatch, fetchData]);
    return (_jsxs("div", __assign({ className: classNames(cls.ArticlesPageFilters, {}, [className]) }, { children: [_jsxs("div", __assign({ className: cls.sortWrapper }, { children: [_jsx(ArticleSortSelector, { order: order, sort: sort, onChangeOrder: onChangeOrder, onChangeSort: onChangeSort }), _jsx(ArticleViewSelector, { view: view, onViewClick: onChangeView })] })), _jsx(Card, __assign({ className: cls.search }, { children: _jsx(Input, { onChange: onChangeSearch, value: search, placeholder: t('Поиск') }) })), _jsx(ArticleTypeTabs, { value: type, onChangeType: onChangeType, className: cls.tabs })] })));
});
