import { useTranslation } from 'react-i18next';
import React, { memo } from 'react';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { classNames } from 'shared/lib/classNames/classNames';

interface LangSwitcherProps {
    className?: string;
    short?: boolean;
}

export const LangSwitcher = memo(({ className, short }: LangSwitcherProps) => {
    const { t, i18n } = useTranslation();

    const toggleLanguage = () => i18n.changeLanguage(
        i18n.language === 'ru' ? 'en' : 'ru',
    );

    // t('translate') - translate - ключ для перевода
    return (
        <Button
            className={classNames('', {}, [className])}
            theme={ButtonTheme.CLEAR}
            onClick={toggleLanguage}
        >
            {short ? t('shortLang') : t('language')}
        </Button>
    );
});
