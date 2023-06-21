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
import { TextAlign, TextCustom } from 'shared/ui/TextCustom/TextCustom';
import cls from './ArticleImageBlockComponent.module.scss';
export var ArticleImageBlockComponent = memo(function (_a) {
    var className = _a.className, block = _a.block;
    var t = useTranslation().t;
    return (_jsxs("div", __assign({ className: classNames(cls.ArticleImageBlockComponent, {}, [className]) }, { children: [_jsx("img", { src: block.src, alt: block.title, className: cls.img }), block.title && (_jsx(TextCustom, { text: block.title, align: TextAlign.CENTER }))] })));
});
