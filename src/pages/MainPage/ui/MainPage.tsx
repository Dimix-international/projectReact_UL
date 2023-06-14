import React from 'react';
import { useTranslation } from 'react-i18next';
import { Counter } from 'entities/Counter';
import { Page } from 'widgets/Page/Page';

const MainPage = () => {
    const { t } = useTranslation('main');

    return (
        <Page>
            { t('mainPage') }
            <Counter />
        </Page>
    );
};

export default MainPage;
