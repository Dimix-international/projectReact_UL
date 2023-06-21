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
import { useTranslation } from 'react-i18next';
import { memo, useEffect } from 'react';
import { ArticleView } from 'entities/Article';
import { TextCustom, TextSize } from 'shared/ui/TextCustom/TextCustom';
import { useArticleRecommendationsList } from 'features/articleRecommendationsList/api/aritcleRecommendationsApi';
import { VirtuosoGrid } from 'react-virtuoso';
import { ArticleListItem } from 'entities/Article/ui/ArticleListItem/ArticleListItem';
import cls from './articleRecommendationList.module.scss';
export var ArticleRecommendationsList = memo(function (_a) {
    var className = _a.className;
    var t = useTranslation('article').t;
    var _b = useArticleRecommendationsList(5), isLoading = _b.isLoading, _c = _b.data, articles = _c === void 0 ? [] : _c, error = _b.error;
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
    if (isLoading || error) {
        return null;
    }
    var renderArticle = function (index, article) { return (_jsx(ArticleListItem, { className: cls.card, article: article, view: ArticleView.SMALL, target: "_blank", index: index }, article.id)); };
    return (_jsxs("div", __assign({ className: cls.recommendationList }, { children: [_jsx(TextCustom, { size: TextSize.L, title: t('Recommend') }), _jsx(VirtuosoGrid, { totalCount: articles.length, data: articles, itemContent: renderArticle, listClassName: cls.itemsWrapper })] })));
});
