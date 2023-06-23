import { memo, useCallback } from 'react';
import { Article, ArticleList, ArticleView } from 'entities/Article';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { fetchNextArticlesPage } from '../../model/services/fetchNextArticlePage/fetchNextArticlePage';

interface ArticleListProps {
    articles: Article[],
    view: ArticleView
    isLoading: boolean
}
export const ArticleInfiniteList = memo(({ articles, view, isLoading } : ArticleListProps) => {
    const dispatch = useAppDispatch();

    const onLoadNextPart = useCallback(() => {
        dispatch(fetchNextArticlesPage());
    }, [dispatch]);

    return (
        <ArticleList
            isLoading={isLoading}
            articles={articles}
            view={view}
            onLoadNextPart={onLoadNextPart}
        />
    );
});
