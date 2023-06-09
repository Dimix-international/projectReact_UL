import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton/Skeleton';
import { Avatar } from '@/shared/ui/deprecated/Avatar/Avatar';
import { TextCustom } from '@/shared/ui/deprecated/TextCustom/TextCustom';
import { AppLink } from '@/shared/ui/redesigned/AppLink/AppLink';
import { Comment } from '../../model/types/comment';
import cls from './CommentCard.module.scss';
import { getRouteProfile } from '@/shared/const/router';

interface CommentCardProps {
    className?: string;
    comment?: Comment;
    isLoading?: boolean;
    index?: number;
}

export const CommentCard = memo((props: CommentCardProps) => {
    const { className, comment, isLoading, index } = props;

    if (isLoading) {
        return (
            <div
                className={classNames(cls.CommentCard, {}, [
                    className,
                    cls.loading,
                ])}
                data-testid="CommentCard.Loading"
            >
                <div className={cls.header}>
                    <Skeleton width={30} height={30} border="50%" />
                    <Skeleton
                        height={16}
                        width={100}
                        className={cls.username}
                    />
                </div>
                <Skeleton className={cls.text} width="100%" height={50} />
            </div>
        );
    }

    if (!comment) {
        return null;
    }

    return (
        <div
            className={classNames(cls.CommentCard, {}, [className])}
            data-testid="CommentCard.Content"
        >
            <AppLink
                to={getRouteProfile(comment.user.id)}
                className={cls.header}
            >
                {comment.user.avatar ? (
                    <Avatar size={30} src={comment.user.avatar} />
                ) : null}
                <TextCustom
                    className={cls.username}
                    title={comment.user.username}
                />
            </AppLink>
            <TextCustom className={cls.text} text={comment.text} />
        </div>
    );
});
