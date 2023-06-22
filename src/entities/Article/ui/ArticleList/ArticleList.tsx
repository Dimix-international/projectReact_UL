import {
    FC,
    HTMLAttributeAnchorTarget, memo, useEffect, useRef,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { ArticleListItemSkeleton } from 'entities/Article/ui/ArticleListItem/ArticleListItemSkeleton';
import { TextAlign, TextCustom, TextSize } from 'shared/ui/TextCustom/TextCustom';
import {
    Virtuoso, VirtuosoGrid, VirtuosoGridHandle, VirtuosoHandle,
} from 'react-virtuoso';
import { ArticlesPageFilters } from 'pages/ArticlesPage/ui/ArticlePageFilters/ArticlesPageFilters';
import { ARTICLE_LIST_ITEM_INDEX_LOCAL_STORAGE } from 'shared/const/localStorage';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { Article, ArticleView } from '../../model/types/article';
import cls from './ArticleList.module.scss';

interface ArticleListProps {
    className?: string;
    articles: Article[],
    isLoading?: boolean,
    view?: ArticleView
    target?: HTMLAttributeAnchorTarget;
    onLoadNextPart?: () => void
}

const Header = () => <ArticlesPageFilters />;

const getSkeletons = () => new Array(3)
    .fill(0)
    .map((item, index) => (
        <ArticleListItemSkeleton className={cls.card} key={index} view={ArticleView.BIG} />
    ));

export const ArticleList = memo((props: ArticleListProps) => {
    const {
        className,
        articles,
        isLoading,
        view = ArticleView.SMALL,
        target,
        onLoadNextPart,
    } = props;
    const { t } = useTranslation();

    const virtuosoGridRef = useRef<VirtuosoGridHandle>(null);
    const virtuosoRef = useRef<VirtuosoHandle>(null);

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

    useEffect(() => {
        const page = sessionStorage.getItem(ARTICLE_LIST_ITEM_INDEX_LOCAL_STORAGE);
        const index = page ? +page : 0;

        setTimeout(() => {
            if (view === ArticleView.SMALL && virtuosoGridRef.current) {
                virtuosoGridRef.current.scrollToIndex({
                    index,
                });
                return;
            }
            // тут можно и без setTimeout
            if (view === ArticleView.BIG && virtuosoRef.current) {
                virtuosoRef.current.scrollToIndex({
                    index,
                });
            }
        }, 100);
    }, [view]);

    const renderArticle = (index: number, article: Article) => (
        <ArticleListItem
            className={cls.card}
            key={article.id}
            article={article}
            view={view}
            target={target}
            index={index}
        />
    );

    // eslint-disable-next-line react/no-unstable-nested-components
    const Footer = () => {
        if (isLoading) {
            return (
                <div className={cls.skeleton}>
                    {getSkeletons()}
                </div>
            );
        }
        return null;
    };

    // eslint-disable-next-line react/no-unstable-nested-components
    const ItemContainerComp: FC<{height: number; width: number; index: number}> = ({ height, width, index }) => {
        return (
            <div className={cls.ItemContainer}>
                <ArticleListItemSkeleton key={index} view={view} className={cls.card} />
            </div>
        );
    };

    if (!isLoading && !articles.length) {
        return (
            <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
                <TextCustom size={TextSize.L} title={t(' No data yet!')} align={TextAlign.CENTER} />
            </div>
        );
    }

    return (
        <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
            {
                view === ArticleView.BIG ? (
                    <Virtuoso
                        ref={virtuosoRef}
                        style={{ height: '100%' }}
                        data={articles}
                        itemContent={renderArticle}
                        endReached={onLoadNextPart}
                        initialTopMostItemIndex={0}
                        components={{
                            Header,
                            Footer,
                        }}
                    />
                ) : (
                    <VirtuosoGrid
                        ref={virtuosoGridRef}
                        totalCount={articles.length}
                        components={{
                            Header,
                            ScrollSeekPlaceholder: ItemContainerComp,
                        }}
                        endReached={onLoadNextPart}
                        data={articles}
                        itemContent={renderArticle}
                        listClassName={cls.itemsWrapper}
                        atTopStateChange={() => false}
                        /*                         scrollSeekConfiguration={{
                            enter: (velocity) => Math.abs(velocity) > 200,
                            exit: (velocity) => Math.abs(velocity) < 30,
                        }} */
                    />
                )
            }
        </div>
    );
});
