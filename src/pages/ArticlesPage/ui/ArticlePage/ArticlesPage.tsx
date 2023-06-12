import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { ArticleList, ArticleView } from 'entities/Article';
import cls from './ArticlesPage.module.scss';

interface ArticlePageProps {
    className?: string;
}

const ArticlesPage = ({ className }: ArticlePageProps) => {
    const { t } = useTranslation('article');
    return (
        <div className={classNames(cls.ArticlePage, {}, [className])}>
            <ArticleList articles={[]} view={ArticleView.BIG} />
        </div>
    );
};

export default memo(ArticlesPage);
