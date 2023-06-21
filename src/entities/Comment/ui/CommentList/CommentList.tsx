import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { TextCustom } from 'shared/ui/TextCustom/TextCustom';
import { Virtuoso } from 'react-virtuoso';
import cls from './CommentList.module.scss';
import { Comment } from '../../model/types/comment';
import { CommentCard } from '../../ui/CommentCard/CommentCard';

interface CommentListProps {
    className?: string;
    comments?: Comment[];
    isLoading?: boolean;
}

export const CommentList = memo((props: CommentListProps) => {
    const {
        className,
        comments,
        isLoading,
    } = props;

    const { t } = useTranslation('article');

    if (isLoading) {
        return (
            <div className={classNames(cls.comment, {}, [className])}>
                <CommentCard isLoading={isLoading} />
                <CommentCard isLoading={isLoading} />
                <CommentCard isLoading={isLoading} />
            </div>
        );
    }

    const renderArticle = (index: number, comment: Comment) => (
        <CommentCard
            key={comment.id}
            comment={comment}
            isLoading={isLoading}
            index={index}
        />
    );

    return (
        <div className={classNames(cls.CommentList, {}, [className])}>
            {comments?.length
                ? (
                    <Virtuoso
                        style={{ height: '100%' }}
                        data={comments}
                        itemContent={renderArticle}
                    />
                )
                : <TextCustom text={t('No comments!')} />}
        </div>
    );
});
