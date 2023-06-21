import { jsx as _jsx } from "react/jsx-runtime";
import { useTranslation } from 'react-i18next';
import { Page } from 'widgets/Page/Page';
var AboutPage = function () {
    var t = useTranslation('about').t;
    return (_jsx(Page, { children: t('aboutsSite') }));
};
export default AboutPage;
