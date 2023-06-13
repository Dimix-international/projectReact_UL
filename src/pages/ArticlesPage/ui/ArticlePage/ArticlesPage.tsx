import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useCallback } from 'react';
import { ArticleList, ArticleView, ArticleViewSelector } from 'entities/Article';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { fetchArticlesList } from '../../model/services/fetchArticlesList/fetchArticlesList';
import { articlePageActions, articlePageReducer, getArticles } from '../../model/slice/articlePageSlice';
import cls from './ArticlesPage.module.scss';
import { articlesListLoading, articlesListView } from '../../model/selectors/articlesList';

interface ArticlePageProps {
    className?: string;
}

const reducers: ReducersList = {
    articlesPage: articlePageReducer,
};

const ArticlesPage = ({ className }: ArticlePageProps) => {
    const dispatch = useAppDispatch();
    const articles = useSelector(getArticles.selectAll);
    const isLoading = useSelector(articlesListLoading);
    const view = useSelector(articlesListView);

    const onChangeView = useCallback((view: ArticleView) => {
        dispatch(articlePageActions.setView(view));
    }, [dispatch]);

    useInitialEffect(() => {
        dispatch(fetchArticlesList());
        dispatch(articlePageActions.initState());
    });
    return (
        <DynamicModuleLoader reducers={reducers}>
            <div className={classNames(cls.ArticlePage, {}, [className])}>
                <ArticleViewSelector view={view} onViewClick={onChangeView} />
                <ArticleList articles={articles} view={view} isLoading={isLoading} />
            </div>
        </DynamicModuleLoader>
    );
};

export default memo(ArticlesPage);
