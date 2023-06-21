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
import { memo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useSelector } from 'react-redux';
import { getArticleDetailsData } from 'entities/Article/model/selectors/articleDetails';
import { getCanEditArticle } from '../../model/selectors/article';
import cls from './ArticleDetailsPageHeader.module.scss';
export var ArticleDetailsPageHeader = memo(function (props) {
    var className = props.className;
    var t = useTranslation().t;
    var navigate = useNavigate();
    var canEdit = useSelector(getCanEditArticle);
    var article = useSelector(getArticleDetailsData);
    var onBackToList = useCallback(function () {
        navigate(RoutePath.articles);
    }, [navigate]);
    var onEditArticle = useCallback(function () {
        navigate("".concat(RoutePath.article_details).concat(article === null || article === void 0 ? void 0 : article.id, "/edit"));
    }, [article === null || article === void 0 ? void 0 : article.id, navigate]);
    return (_jsxs("div", __assign({ className: classNames(cls.ArticleDetailsPageHeader, {}, [className]) }, { children: [_jsx(Button, __assign({ theme: ButtonTheme.OUTLINE, onClick: onBackToList }, { children: t('Назад к списку') })), canEdit && (_jsx(Button, __assign({ className: cls.editBtn, theme: ButtonTheme.OUTLINE, onClick: onEditArticle }, { children: t('Редактировать') })))] })));
});
