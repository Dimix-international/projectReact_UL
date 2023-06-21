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
import { memo, useMemo } from 'react';
import { Select } from 'shared/ui/Select/Select';
import { ArticleSortField } from 'entities/Article/model/types/article';
import cls from './ArticleSortSelector.module.scss';
export var ArticleSortSelector = memo(function (props) {
    var className = props.className, onChangeOrder = props.onChangeOrder, onChangeSort = props.onChangeSort, order = props.order, sort = props.sort;
    var t = useTranslation().t;
    var orderOptions = useMemo(function () { return [
        {
            value: 'asc',
            content: t('возрастанию'),
        },
        {
            value: 'desc',
            content: t('убыванию'),
        },
    ]; }, [t]);
    var sortFieldOptions = useMemo(function () { return [
        {
            value: ArticleSortField.CREATED,
            content: t('дате создания'),
        },
        {
            value: ArticleSortField.TITLE,
            content: t('названию'),
        },
        {
            value: ArticleSortField.VIEWS,
            content: t('просмотрам'),
        },
    ]; }, [t]);
    return (_jsxs("div", __assign({ className: classNames(cls.ArticleSortSelector, {}, [className]) }, { children: [_jsx(Select, { options: sortFieldOptions, label: t('Сортировать ПО'), value: sort, onChange: onChangeSort }), _jsx(Select, { options: orderOptions, label: t('по'), value: order, onChange: onChangeOrder, className: cls.order })] })));
});
