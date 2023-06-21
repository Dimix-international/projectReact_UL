var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { TextCustom } from 'shared/ui/TextCustom/TextCustom';
import { Virtuoso } from 'react-virtuoso';
import cls from './CommentList.module.scss';
import { CommentCard } from '../../ui/CommentCard/CommentCard';
export var CommentList = memo(function (props) {
    var className = props.className, comments = props.comments, isLoading = props.isLoading;
    var t = useTranslation('article').t;
    if (isLoading) {
        return (_jsxs("div", __assign({ className: classNames(cls.comment, {}, [className]) }, { children: [_jsx(CommentCard, { isLoading: isLoading }), _jsx(CommentCard, { isLoading: isLoading }), _jsx(CommentCard, { isLoading: isLoading })] })));
    }
    var renderArticle = function (index, comment) { return (_jsx(CommentCard, { comment: comment, isLoading: isLoading, index: index }, comment.id)); };
    return (_jsx("div", __assign({ className: classNames(cls.CommentList, {}, [className]) }, { children: (comments === null || comments === void 0 ? void 0 : comments.length)
            ? (_jsx(Virtuoso, { style: { height: '100%' }, data: comments, itemContent: renderArticle }))
            : _jsx(TextCustom, { text: t('No comments!') }) })));
});
