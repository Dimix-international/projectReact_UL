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
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { Card } from 'shared/ui/Card/Card';
import { TextCustom } from 'shared/ui/TextCustom/TextCustom';
import { IconComponent } from 'shared/ui/IconComponent/IconComponent';
import EyeIcon from 'shared/assets/icons/eye-20-20.svg';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useHover } from 'shared/lib/hooks/useHover/useHover';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { ARTICLE_LIST_ITEM_INDEX_LOCAL_STORAGE } from 'shared/const/localStorage';
import { ArticleBlockType, ArticleView, } from '../../model/types/article';
import cls from './ArticleListItem.module.scss';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
export var ArticleListItem = memo(function (props) {
    var _a, _b;
    var className = props.className, article = props.article, _c = props.view, view = _c === void 0 ? ArticleView.SMALL : _c, _d = props.target, target = _d === void 0 ? '_self' : _d, index = props.index;
    var t = useTranslation('article').t;
    var _e = useHover(), bindHover = _e[1];
    var types = _jsx(TextCustom, { text: article.type.join(', '), className: cls.types });
    var views = (_jsxs(_Fragment, { children: [_jsx(TextCustom, { text: String(article.views), className: cls.views }), _jsx(IconComponent, { Svg: EyeIcon })] }));
    var handlerButtonClick = useCallback(function () {
        sessionStorage.setItem(ARTICLE_LIST_ITEM_INDEX_LOCAL_STORAGE, String(index));
    }, [index]);
    if (view === ArticleView.BIG) {
        var textBlock = article.blocks.find(function (block) { return block.type === ArticleBlockType.TEXT; });
        return (_jsx("div", __assign({ className: classNames(cls.ArticleListItem, {}, [className, cls[view]]) }, bindHover, { children: _jsxs(Card, __assign({ className: cls.card }, { children: [_jsxs("div", __assign({ className: cls.header }, { children: [_jsx(Avatar, { size: 30, src: (_a = article.user) === null || _a === void 0 ? void 0 : _a.avatar }), _jsx(TextCustom, { text: (_b = article.user) === null || _b === void 0 ? void 0 : _b.username, className: cls.username }), _jsx(TextCustom, { text: article.createdAt, className: cls.date })] })), _jsx(TextCustom, { title: article.title, className: cls.title }), types, _jsx("img", { src: article.img, className: cls.img, alt: article.title }), textBlock && (_jsx(ArticleTextBlockComponent, { block: textBlock, className: cls.textBlock })), _jsxs("div", __assign({ className: cls.footer }, { children: [_jsx(AppLink, __assign({ to: RoutePath.article_details + article.id }, { children: _jsx(Button, __assign({ theme: ButtonTheme.OUTLINE, onClick: handlerButtonClick }, { children: t('readMore') })) })), views] }))] })) })));
    }
    return (_jsx(AppLink, __assign({ target: target, to: RoutePath.article_details + article.id, className: classNames(cls.ArticleListItem, {}, [className, cls[view]]) }, bindHover, { children: _jsxs(Card, __assign({ className: cls.card }, { children: [_jsxs("div", __assign({ className: cls.imageWrapper }, { children: [_jsx("img", { alt: article.title, src: article.img, className: cls.img }), _jsx(TextCustom, { text: article.createdAt, className: cls.date })] })), _jsxs("div", __assign({ className: cls.infoWrapper }, { children: [types, views] })), _jsx(TextCustom, { text: article.title, className: cls.title })] })) })));
});
