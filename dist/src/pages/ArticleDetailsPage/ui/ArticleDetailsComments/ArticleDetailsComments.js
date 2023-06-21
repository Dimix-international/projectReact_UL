import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { TextCustom, TextSize } from 'shared/ui/TextCustom/TextCustom';
import cls from 'pages/ArticleDetailsPage/ui/ArticleDetailsPage/ArticleDetailsPage.module.scss';
import { AddCommentForm } from 'features/AddCommentForm';
import { CommentList } from 'entities/Comment';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { addCommentForArticle } from 'pages/ArticleDetailsPage/model/services/addCommentForArticle/addCommentForArticle';
import { useSelector } from 'react-redux';
import { getArticleComments } from 'pages/ArticleDetailsPage';
import { getArticleCommentsIsLoading } from 'pages/ArticleDetailsPage/model/selectors/comments';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { fetchCommentsByArticleId, } from 'pages/ArticleDetailsPage/model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
export var ArticleDetailsComments = memo(function (props) {
    var className = props.className, id = props.id;
    var t = useTranslation().t;
    var comments = useSelector(getArticleComments.selectAll);
    var commentsIsLoading = useSelector(getArticleCommentsIsLoading);
    var dispatch = useAppDispatch();
    var onSendComment = useCallback(function (text) {
        dispatch(addCommentForArticle(text));
    }, [dispatch]);
    useInitialEffect(function () {
        dispatch(fetchCommentsByArticleId(id));
    });
    return (_jsxs(_Fragment, { children: [_jsx(TextCustom, { size: TextSize.L, title: t('Comments'), className: cls.commentTitle }), _jsx(AddCommentForm, { onSendComment: onSendComment }), _jsx(CommentList, { isLoading: commentsIsLoading, comments: comments })] }));
});
