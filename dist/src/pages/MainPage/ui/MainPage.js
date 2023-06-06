import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useTranslation } from 'react-i18next';
import { Counter } from 'entities/Counter';
var MainPage = function () {
    var t = useTranslation('main').t;
    return (_jsxs("div", { children: [t('mainPage'), _jsx(Counter, {})] }));
};
export default MainPage;
