import { HTMLAttributeAnchorTarget, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Card } from '@/shared/ui/Card/Card';
import { TextCustom } from '@/shared/ui/TextCustom/TextCustom';
import { IconComponent } from '@/shared/ui/IconComponent/IconComponent';
import EyeIcon from '@/shared/assets/icons/eye-20-20.svg';
import { Avatar } from '@/shared/ui/Avatar/Avatar';
import { Button, ButtonTheme } from '@/shared/ui/Button/Button';
import { useHover } from '@/shared/lib/hooks/useHover/useHover';
import { AppLink } from '@/shared/ui/AppLink/AppLink';
import { ARTICLE_LIST_ITEM_INDEX_LOCAL_STORAGE } from '@/shared/const/localStorage';
import { ArticleBlockType, ArticleView } from '../../model/constnts/constns';
import {
    Article, ArticleTextBlock,
} from '../../model/types/article';
import cls from './ArticleListItem.module.scss';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import { getRouteArticleDetails } from '@/shared/const/router';

interface ArticleListItemProps {
    className?: string;
    article: Article;
    view: ArticleView;
    target?: HTMLAttributeAnchorTarget;
    index: number
}

export const ArticleListItem = memo((props: ArticleListItemProps) => {
    const {
        className,
        article,
        view = ArticleView.SMALL,
        target = '_self',
        index,
    } = props;

    const { t } = useTranslation('article');
    const [, bindHover] = useHover();

    const types = <TextCustom text={article.type.join(', ')} className={cls.types} />;
    const views = (
        <>
            <TextCustom text={String(article.views)} className={cls.views} />
            <IconComponent Svg={EyeIcon} />
        </>
    );

    const handlerButtonClick = useCallback(() => {
        sessionStorage.setItem(ARTICLE_LIST_ITEM_INDEX_LOCAL_STORAGE, String(index));
    }, [index]);

    if (view === ArticleView.BIG) {
        const textBlock = article.blocks.find(
            (block) => block.type === ArticleBlockType.TEXT,
        ) as ArticleTextBlock;

        return (
            <div
                className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}
                {...bindHover}
            >
                <Card className={cls.card}>
                    <div className={cls.header}>
                        <Avatar size={30} src={article.user?.avatar} />
                        <TextCustom text={article.user?.username} className={cls.username} />
                        <TextCustom text={article.createdAt} className={cls.date} />
                    </div>
                    <TextCustom title={article.title} className={cls.title} />
                    {types}
                    <img src={article.img} className={cls.img} alt={article.title} />
                    {textBlock && (
                        <ArticleTextBlockComponent block={textBlock} className={cls.textBlock} />
                    )}
                    <div className={cls.footer}>
                        <AppLink to={getRouteArticleDetails(article.id)}>
                            <Button
                                theme={ButtonTheme.OUTLINE}
                                onClick={handlerButtonClick}
                            >
                                {t('readMore')}
                            </Button>
                        </AppLink>
                        {views}
                    </div>
                </Card>
            </div>
        );
    }

    return (
        <AppLink
            target={target}
            to={getRouteArticleDetails(article.id)}
            className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}
            {...bindHover}
        >
            <Card className={cls.card}>
                <div className={cls.imageWrapper}>
                    <img alt={article.title} src={article.img} className={cls.img} />
                    <TextCustom text={article.createdAt} className={cls.date} />
                </div>
                <div className={cls.infoWrapper}>
                    {types}
                    {views}
                </div>
                <TextCustom text={article.title} className={cls.title} />
            </Card>
        </AppLink>
    );
});
