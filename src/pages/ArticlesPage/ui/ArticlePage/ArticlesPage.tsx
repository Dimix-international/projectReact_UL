import { memo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
    DynamicModuleLoader,
    ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { Page } from '@/widgets/Page/Page';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { initArticlesPage } from '../../model/services/initArticlesPage/initArticlesPage';
import { ArticleInfiniteList } from '../ArticleInfiniteList/ArticleInfiniteList';
import {
    articlesListLoading,
    articlesListView,
} from '../../model/selectors/articlesList';
import {
    articlePageReducer,
    getArticles,
} from '../../model/slice/articlePageSlice';
import { ArticlePageGreeting } from '@/features/articlePageGreeting';

interface ArticlePageProps {
    className?: string;
}

const reducers: ReducersList = {
    articlesPage: articlePageReducer,
};

const ArticlesPage = ({ className }: ArticlePageProps) => {
    const dispatch = useAppDispatch();
    const [searchParams] = useSearchParams();
    const isLoading = useSelector(articlesListLoading);
    const articles = useSelector(getArticles.selectAll);
    const view = useSelector(articlesListView);

    useInitialEffect(() => {
        dispatch(initArticlesPage(searchParams));
    });

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
            <Page
                className={classNames('', {}, [className])}
                data-testid="ArticlesPage"
            >
                <ArticleInfiniteList
                    articles={articles}
                    view={view}
                    isLoading={isLoading}
                />
                <ArticlePageGreeting />
            </Page>
        </DynamicModuleLoader>
    );
};

export default memo(ArticlesPage);
