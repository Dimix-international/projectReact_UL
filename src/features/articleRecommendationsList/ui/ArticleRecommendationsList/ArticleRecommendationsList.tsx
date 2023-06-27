import { useTranslation } from 'react-i18next';
import { memo, useEffect } from 'react';
import { VirtuosoGrid } from 'react-virtuoso';
import { Article, ArticleView } from '@/entities/Article';
import { TextCustom, TextSize } from '@/shared/ui/TextCustom/TextCustom';
import { ArticleListItem } from '@/entities/Article/ui/ArticleListItem/ArticleListItem';
import { useArticleRecommendationsList } from '../../api/aritcleRecommendationsApi';
import cls from './articleRecommendationList.module.scss';

export interface ArticleRecommendationsListProps {
    className?: string;
}

const ArticleRecommendationsList = memo(({ className }: ArticleRecommendationsListProps) => {
    const { t } = useTranslation('article');
    const { isLoading, data: articles, error } = useArticleRecommendationsList(5);

    useEffect(() => {
        const errorHandler = (e: ErrorEvent) => {
            if (e.message === 'ResizeObserver loop limit exceeded') {
                const resizeObserverErrDiv = document.getElementById(
                    'webpack-dev-server-client-overlay-div',
                );
                const resizeObserverErr = document.getElementById(
                    'webpack-dev-server-client-overlay',
                );
                if (resizeObserverErr) {
                    resizeObserverErr.setAttribute('style', 'display: none');
                }
                if (resizeObserverErrDiv) {
                    resizeObserverErrDiv.setAttribute('style', 'display: none');
                }
            }
        };
        window.addEventListener('error', errorHandler);

        return () => window.removeEventListener('error', errorHandler);
    }, []);

    if (isLoading || error || !articles) {
        return null;
    }

    const renderArticle = (index: number, article: Article) => (
        <ArticleListItem
            className={cls.card}
            key={article.id}
            article={article}
            view={ArticleView.SMALL}
            target="_blank"
            index={index}
        />
    );

    return (
        <div className={cls.recommendationList} data-testid="ArticleRecommendationsList">
            <TextCustom
                size={TextSize.L}
                title={t('Recommend')}
            />
            <VirtuosoGrid
                totalCount={articles.length}
                data={articles}
                itemContent={renderArticle}
                listClassName={cls.itemsWrapper}
            />
        </div>
    );
});

export default ArticleRecommendationsList;
