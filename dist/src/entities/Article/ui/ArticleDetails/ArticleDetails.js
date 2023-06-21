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
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { DynamicModuleLoader } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { memo, useCallback, useEffect } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { fetchArticleById } from 'entities/Article/model/services/fetchArticleById/fetchArticleById';
import { useSelector } from 'react-redux';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { TextAlign, TextCustom, TextSize, TextTheme, } from 'shared/ui/TextCustom/TextCustom';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import EyeIcon from 'shared/assets/icons/eye-20-20.svg';
import CalendarIcon from 'shared/assets/icons/calendar-20-20.svg';
import { IconComponent } from 'shared/ui/IconComponent/IconComponent';
import { ArticleCodeBlockComponent } from 'entities/Article/ui/ArticleCodeBlockComponent/ArticleCodeBlockComponent';
import { ArticleImageBlockComponent } from 'entities/Article/ui/ArticleImageBlockComponent/ArticleImageBlockComponent';
import { ArticleTextBlockComponent } from 'entities/Article/ui/ArticleTextBlockComponent/ArticleTextBlockComponent';
import { getArticleDetailsData, getArticleDetailsError, getArticleDetailsIsLoading } from '../../model/selectors/articleDetails';
import cls from './ArticleDetails.module.scss';
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice';
import { ArticleBlockType } from '../../model/types/article';
var reducers = {
    articleDetails: articleDetailsReducer,
};
export var ArticleDetails = memo(function (_a) {
    var className = _a.className, id = _a.id;
    var t = useTranslation().t;
    var dispatch = useAppDispatch();
    var isLoading = useSelector(getArticleDetailsIsLoading);
    var article = useSelector(getArticleDetailsData);
    var error = useSelector(getArticleDetailsError);
    var renderBlock = useCallback(function (block) {
        switch (block.type) {
            case ArticleBlockType.CODE: {
                return (_jsx(ArticleCodeBlockComponent, { block: block, className: cls.block }, block.id));
            }
            case ArticleBlockType.IMAGE: {
                return (_jsx(ArticleImageBlockComponent, { block: block, className: cls.block }, block.id));
            }
            case ArticleBlockType.TEXT: {
                return (_jsx(ArticleTextBlockComponent, { block: block, className: cls.block }, block.id));
            }
            default: return null;
        }
    }, []);
    useEffect(function () {
        if (__PROJECT__ !== 'storybook') {
            dispatch(fetchArticleById(id));
        }
    }, [dispatch, id]);
    var content;
    if (isLoading) {
        content = (_jsxs(_Fragment, { children: [_jsx(Skeleton, { className: cls.avatar, width: 200, height: 200, border: "50%" }), _jsx(Skeleton, { className: cls.title, width: 300, height: 32 }), _jsx(Skeleton, { className: cls.skeleton, width: 600, height: 24 }), _jsx(Skeleton, { className: cls.skeleton, width: "100%", height: 200 }), _jsx(Skeleton, { className: cls.skeleton, width: "100%", height: 200 })] }));
    }
    else if (error) {
        content = (_jsx(TextCustom, { align: TextAlign.CENTER, title: error, theme: TextTheme.ERROR }));
    }
    else {
        content = (_jsxs(_Fragment, { children: [_jsx("div", __assign({ className: cls.avatarWrapper }, { children: _jsx(Avatar, { size: 200, src: article === null || article === void 0 ? void 0 : article.img, className: cls.avatar }) })), _jsx(TextCustom, { className: cls.title, title: article === null || article === void 0 ? void 0 : article.title, text: article === null || article === void 0 ? void 0 : article.subtitle, size: TextSize.L }), _jsxs("div", __assign({ className: cls.articleInfo }, { children: [_jsx(IconComponent, { className: cls.icon, Svg: EyeIcon }), _jsx(TextCustom, { text: String(article === null || article === void 0 ? void 0 : article.views) })] })), _jsxs("div", __assign({ className: cls.articleInfo }, { children: [_jsx(IconComponent, { className: cls.icon, Svg: CalendarIcon }), _jsx(TextCustom, { text: article === null || article === void 0 ? void 0 : article.createdAt })] })), article === null || article === void 0 ? void 0 : article.blocks.map(renderBlock)] }));
    }
    return (_jsx(DynamicModuleLoader, __assign({ reducers: reducers }, { children: _jsx("div", __assign({ className: classNames(cls.ArticleDetails, {}, [className]) }, { children: content })) })));
});
