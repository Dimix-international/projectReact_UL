import { jsx as _jsx } from "react/jsx-runtime";
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback, useMemo } from 'react';
import { Tabs } from 'shared/ui/Tabs/Tabs';
import { ArticleType } from '../../model/types/article';
export var ArticleTypeTabs = memo(function (props) {
    var className = props.className, value = props.value, onChangeType = props.onChangeType;
    var t = useTranslation().t;
    var typeTabs = useMemo(function () { return [
        {
            value: ArticleType.ALL,
            content: t('Все статьи'),
        },
        {
            value: ArticleType.IT,
            content: t('Айти'),
        },
        {
            value: ArticleType.ECONOMICS,
            content: t('Экономика'),
        },
        {
            value: ArticleType.SCIENCE,
            content: t('Наука'),
        },
    ]; }, [t]);
    var onTabClick = useCallback(function (tab) {
        onChangeType(tab.value);
    }, [onChangeType]);
    return (_jsx(Tabs, { tabs: typeTabs, value: value, onTabClick: onTabClick, className: classNames('', {}, [className]) }));
});
