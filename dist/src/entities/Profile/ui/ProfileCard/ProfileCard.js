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
import { TextCustom } from 'shared/ui/TextCustom/TextCustom';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import cls from './ProfileCard.module.scss';
export var ProfileCard = function (props) {
    var className = props.className, data = props.data, isLoading = props.isLoading, error = props.error;
    var t = useTranslation('profile').t;
    return (_jsxs("div", __assign({ className: classNames(cls.ProfileCard, {}, [className]) }, { children: [_jsxs("div", __assign({ className: cls.header }, { children: [_jsx(TextCustom, { title: t('profile') }), _jsx(Button, __assign({ className: cls.editBtn, theme: ButtonTheme.OUTLINE }, { children: t('edit') }))] })), _jsxs("div", __assign({ className: cls.data }, { children: [_jsx(Input, { value: data === null || data === void 0 ? void 0 : data.first, placeholder: t('yourName'), className: cls.input }), _jsx(Input, { value: data === null || data === void 0 ? void 0 : data.lastname, placeholder: t('yourLastname'), className: cls.input })] }))] })));
};
