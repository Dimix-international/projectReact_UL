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
import { TextAlign, TextCustom, TextTheme } from 'shared/ui/TextCustom/TextCustom';
import { Input } from 'shared/ui/Input/Input';
import { Loader } from 'shared/ui/Loader/Loader';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { CountrySelect } from 'entities/Country/ui/CountrySelect/CountrySelect';
import { CurrencySelect } from 'entities/Currency';
import cls from './ProfileCard.module.scss';
export var ProfileCard = function (props) {
    var _a;
    var className = props.className, data = props.data, isLoading = props.isLoading, error = props.error, _b = props.readOnly, readOnly = _b === void 0 ? true : _b, onChangeFirstName = props.onChangeFirstName, onChangeLastName = props.onChangeLastName, onChangeAge = props.onChangeAge, onChangeCity = props.onChangeCity, onChangeAvatar = props.onChangeAvatar, onChangeUsername = props.onChangeUsername, onChangeCurrency = props.onChangeCurrency, onChangeCountry = props.onChangeCountry;
    var t = useTranslation('profile').t;
    if (isLoading) {
        return (_jsx("div", __assign({ className: classNames(cls.ProfileCard, {}, [className, cls.loading]) }, { children: _jsx(Loader, {}) })));
    }
    if (error) {
        return (_jsx("div", __assign({ className: classNames(cls.ProfileCard, {}, [className, cls.error]) }, { children: _jsx(TextCustom, { theme: TextTheme.ERROR, title: t('Occurred something error'), text: t('Please, refresh page!'), align: TextAlign.CENTER }) })));
    }
    var mods = (_a = {},
        _a[cls.editing] = !readOnly,
        _a);
    return (_jsx("div", __assign({ className: classNames(cls.ProfileCard, mods, [className]) }, { children: _jsxs("div", __assign({ className: cls.data }, { children: [(data === null || data === void 0 ? void 0 : data.avatar) && (_jsx("div", __assign({ className: cls.avatarWrapper }, { children: _jsx(Avatar, { src: data.avatar, alt: "avatar" }) }))), _jsx(Input, { value: data === null || data === void 0 ? void 0 : data.first, placeholder: t('yourName'), className: cls.input, readOnly: readOnly, onChange: onChangeFirstName }), _jsx(Input, { value: data === null || data === void 0 ? void 0 : data.lastname, placeholder: t('yourLastname'), className: cls.input, readOnly: readOnly, onChange: onChangeLastName }), _jsx(Input, { value: data === null || data === void 0 ? void 0 : data.username, placeholder: t('Username'), className: cls.input, readOnly: readOnly, onChange: onChangeUsername }), _jsx(Input, { value: data === null || data === void 0 ? void 0 : data.age, placeholder: t('yourAge'), className: cls.input, readOnly: readOnly, onChange: onChangeAge }), _jsx(Input, { value: data === null || data === void 0 ? void 0 : data.avatar, placeholder: t('Avatar'), className: cls.input, readOnly: readOnly, onChange: onChangeAvatar }), _jsx(Input, { value: data === null || data === void 0 ? void 0 : data.city, placeholder: t('yourCity'), className: cls.input, readOnly: readOnly, onChange: onChangeCity }), _jsx(CountrySelect, { className: cls.input, value: data === null || data === void 0 ? void 0 : data.country, readonly: readOnly, onChange: onChangeCountry }), _jsx(CurrencySelect, { className: cls.input, value: data === null || data === void 0 ? void 0 : data.currency, readonly: readOnly, onChange: onChangeCurrency })] })) })));
};
