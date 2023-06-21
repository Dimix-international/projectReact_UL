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
import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { Card } from 'shared/ui/Card/Card';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import cls from './ArticleListItem.module.scss';
import { ArticleView } from '../../model/types/article';
export var ArticleListItemSkeleton = memo(function (props) {
    var className = props.className, view = props.view;
    if (view === ArticleView.BIG) {
        return (_jsx("div", __assign({ className: classNames(cls.ArticleListItem, {}, [className, cls[view]]) }, { children: _jsxs(Card, __assign({ className: cls.card }, { children: [_jsxs("div", __assign({ className: cls.header }, { children: [_jsx(Skeleton, { border: "50%", height: 30, width: 30 }), _jsx(Skeleton, { width: 150, height: 16, className: cls.username }), _jsx(Skeleton, { width: 150, height: 16, className: cls.date })] })), _jsx(Skeleton, { width: 250, height: 24, className: cls.title }), _jsx(Skeleton, { height: 200, className: cls.img }), _jsx("div", __assign({ className: cls.footer }, { children: _jsx(Skeleton, { height: 36, width: 200 }) }))] })) })));
    }
    return (_jsx("div", __assign({ className: classNames(cls.ArticleListItem, {}, [className, cls[view]]) }, { children: _jsxs(Card, __assign({ className: cls.card }, { children: [_jsx("div", __assign({ className: cls.imageWrapper }, { children: _jsx(Skeleton, { width: 200, height: 200, className: cls.img }) })), _jsx("div", __assign({ className: cls.infoWrapper }, { children: _jsx(Skeleton, { width: 130, height: 16 }) })), _jsx(Skeleton, { width: 150, height: 16, className: cls.title })] })) })));
});
