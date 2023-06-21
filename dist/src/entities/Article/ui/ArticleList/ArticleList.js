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
import { memo, useEffect, useRef, } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { ArticleListItemSkeleton } from 'entities/Article/ui/ArticleListItem/ArticleListItemSkeleton';
import { TextAlign, TextCustom, TextSize } from 'shared/ui/TextCustom/TextCustom';
import { Virtuoso, VirtuosoGrid, } from 'react-virtuoso';
import { ArticlesPageFilters } from 'pages/ArticlesPage/ui/ArticlePageFilters/ArticlesPageFilters';
import { ARTICLE_LIST_ITEM_INDEX_LOCAL_STORAGE } from 'shared/const/localStorage';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleView } from '../../model/types/article';
import cls from './ArticleList.module.scss';
var Header = function () { return _jsx(ArticlesPageFilters, {}); };
var getSkeletons = function () { return new Array(3)
    .fill(0)
    .map(function (item, index) { return (_jsx(ArticleListItemSkeleton, { className: cls.card, view: ArticleView.BIG }, index)); }); };
export var ArticleList = memo(function (props) {
    var className = props.className, articles = props.articles, isLoading = props.isLoading, _a = props.view, view = _a === void 0 ? ArticleView.SMALL : _a, target = props.target, onLoadNextPart = props.onLoadNextPart;
    var t = useTranslation().t;
    var virtuosoGridRef = useRef(null);
    var virtuosoRef = useRef(null);
    useEffect(function () {
        var errorHandler = function (e) {
            if (e.message === 'ResizeObserver loop limit exceeded') {
                var resizeObserverErrDiv = document.getElementById('webpack-dev-server-client-overlay-div');
                var resizeObserverErr = document.getElementById('webpack-dev-server-client-overlay');
                if (resizeObserverErr) {
                    resizeObserverErr.setAttribute('style', 'display: none');
                }
                if (resizeObserverErrDiv) {
                    resizeObserverErrDiv.setAttribute('style', 'display: none');
                }
            }
        };
        window.addEventListener('error', errorHandler);
        return function () { return window.removeEventListener('error', errorHandler); };
    }, []);
    useEffect(function () {
        var page = sessionStorage.getItem(ARTICLE_LIST_ITEM_INDEX_LOCAL_STORAGE);
        var index = page ? +page : 0;
        var timeout = setTimeout(function () {
            if (view === ArticleView.SMALL && virtuosoGridRef.current) {
                virtuosoGridRef.current.scrollToIndex({
                    index: index,
                });
                return;
            }
            // тут можно и без setTimeout
            if (view === ArticleView.BIG && virtuosoRef.current) {
                virtuosoRef.current.scrollToIndex({
                    index: index,
                });
            }
        }, 100);
        return function () { return clearTimeout(timeout); };
    }, [view]);
    var renderArticle = function (index, article) { return (_jsx(ArticleListItem, { className: cls.card, article: article, view: view, target: target, index: index }, article.id)); };
    // eslint-disable-next-line react/no-unstable-nested-components
    var Footer = function () {
        if (isLoading) {
            return (_jsx("div", __assign({ className: cls.skeleton }, { children: getSkeletons() })));
        }
        return null;
    };
    // eslint-disable-next-line react/no-unstable-nested-components
    var ItemContainerComp = function (_a) {
        var height = _a.height, width = _a.width, index = _a.index;
        return (_jsx("div", __assign({ className: cls.ItemContainer }, { children: _jsx(ArticleListItemSkeleton, { view: view, className: cls.card }, index) })));
    };
    if (!isLoading && !articles.length) {
        return (_jsx("div", __assign({ className: classNames(cls.ArticleList, {}, [className, cls[view]]) }, { children: _jsx(TextCustom, { size: TextSize.L, title: t(' No data yet!'), align: TextAlign.CENTER }) })));
    }
    console.log('articles', articles);
    return (_jsx("div", __assign({ className: classNames(cls.ArticleList, {}, [className, cls[view]]) }, { children: view === ArticleView.BIG ? (_jsx(Virtuoso, { ref: virtuosoRef, style: { height: '100%' }, data: articles, itemContent: renderArticle, endReached: onLoadNextPart, initialTopMostItemIndex: 1, components: {
                Header: Header,
                Footer: Footer,
            } })) : (_jsx(VirtuosoGrid, { ref: virtuosoGridRef, totalCount: articles.length, components: {
                Header: Header,
                ScrollSeekPlaceholder: ItemContainerComp,
            }, endReached: onLoadNextPart, data: articles, itemContent: renderArticle, listClassName: cls.itemsWrapper, atTopStateChange: function () { return false; } })) })));
});
