import { jsx as _jsx } from "react/jsx-runtime";
import { memo, useCallback } from 'react';
import { ArticleList } from 'entities/Article';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { articlesListView } from 'pages/ArticlesPage/model/selectors/articlesList';
import { fetchNextArticlesPage } from 'pages/ArticlesPage/model/services/fetchNextArticlePage/fetchNextArticlePage';
export var ArticleInfiniteList = memo(function (_a) {
    var articles = _a.articles;
    var dispatch = useAppDispatch();
    var view = useSelector(articlesListView);
    var onLoadNextPart = useCallback(function () {
        dispatch(fetchNextArticlesPage());
    }, [dispatch]);
    return (_jsx(ArticleList, { articles: articles, view: view, onLoadNextPart: onLoadNextPart }));
});
