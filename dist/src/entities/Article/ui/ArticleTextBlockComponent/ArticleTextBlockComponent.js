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
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { TextCustom } from 'shared/ui/TextCustom/TextCustom';
import cls from './ArticleTextBlockComponent.module.scss';
export var ArticleTextBlockComponent = memo(function (_a) {
    var className = _a.className, block = _a.block;
    var t = useTranslation().t;
    return (_jsxs("div", __assign({ className: classNames(cls.ArticleTextBlockComponent, {}, [className]) }, { children: [block.title && (_jsx(TextCustom, { title: block.title, className: cls.title })), block.paragraphs.map(function (paragraph) { return (_jsx(TextCustom, { text: paragraph, className: cls.paragraph }, paragraph)); })] })));
});
