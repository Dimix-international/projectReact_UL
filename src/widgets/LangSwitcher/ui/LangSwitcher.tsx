import {useTranslation} from "react-i18next";
import React from "react";
import {Button, ThemeButton} from "shared/ui/Button/Button";
import {classNames} from "shared/lib/classNames/classNames";
import cls from './LangSwitcher.module.scss';

interface LangSwitcherProps {
    className?: string
}


export const LangSwitcher = ({ className }: LangSwitcherProps) => {

    const { t, i18n } = useTranslation();

    const toggleLanguage = () => i18n.changeLanguage(
        i18n.language === 'ru' ? 'en' : 'ru'
    )

    //t('translate') - translate - ключ для перевода
    return (
        <Button
            className={classNames(cls.LangSwitcher, {}, [className])}
            theme={ThemeButton.CLEAR}
            onClick={toggleLanguage}
        >
            {t('language')}
        </Button>
    )
};
