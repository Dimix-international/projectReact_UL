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
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { ProfileCard } from 'entities/Profile';
import { DynamicModuleLoader } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { VStack } from 'shared/ui/Stack';
import { TextCustom, TextTheme } from 'shared/ui/TextCustom/TextCustom';
import { getProfileForm } from '../../model/selectors/getProfileForm/getProfileForm';
import { getProfileLoading } from '../../model/selectors/getProfileLoading/getProfileLoading';
import { getProfileError } from '../../model/selectors/getProfileError/getProfileError';
import { getProfileReadOnly } from '../../model/selectors/getProfileReadOnly/getProfileReadOnly';
import { getProfileValidateErrors } from '../../model/selectors/getProfileValidateErrors/getProfileValidateErrors';
import { fetchProfileData } from '../../model/services/fetchProfileData/fetchProfileData';
import { ValidateProfileError } from '../../model/types/editableProfileCardSchema';
import { EditableProfileCardHeader } from '../EditableProfileCardHeader/EditableProfileCardHeader';
import { profileActions, profileReducer } from '../../model/slice/profileSlice';
var reducers = {
    profile: profileReducer,
};
export var EditableProfileCard = memo(function (props) {
    var _a;
    var className = props.className, id = props.id;
    var dispatch = useAppDispatch();
    var t = useTranslation('profile').t;
    var formData = useSelector(getProfileForm);
    var isLoading = useSelector(getProfileLoading);
    var error = useSelector(getProfileError);
    var readonly = useSelector(getProfileReadOnly);
    var validateErrors = useSelector(getProfileValidateErrors);
    var validateErrorTranslates = (_a = {},
        _a[ValidateProfileError.SERVER_ERROR] = t('Серверная ошибка при сохранении'),
        _a[ValidateProfileError.NO_DATA] = t('Данные не указаны'),
        _a[ValidateProfileError.INCORRECT_USER_DATA] = t('Имя и фамилия обязательны'),
        _a[ValidateProfileError.INCORRECT_AGE] = t('Некорректный возраст'),
        _a);
    var onChangeFirstName = useCallback(function (value) {
        dispatch(profileActions.updateProfile({ first: value || '' }));
    }, [dispatch]);
    var onChangeLastName = useCallback(function (value) {
        dispatch(profileActions.updateProfile({ lastname: value || '' }));
    }, [dispatch]);
    var onChangeAge = useCallback(function (value) {
        dispatch(profileActions.updateProfile({ age: +value || 18 }));
    }, [dispatch]);
    var onChangeCity = useCallback(function (value) {
        dispatch(profileActions.updateProfile({ city: value || '' }));
    }, [dispatch]);
    var onChangeAvatar = useCallback(function (value) {
        dispatch(profileActions.updateProfile({ avatar: value }));
    }, [dispatch]);
    var onChangeUsername = useCallback(function (value) {
        dispatch(profileActions.updateProfile({ username: value }));
    }, [dispatch]);
    var onChangeCurrency = useCallback(function (currency) {
        dispatch(profileActions.updateProfile({ currency: currency }));
    }, [dispatch]);
    var onChangeCountry = useCallback(function (country) {
        dispatch(profileActions.updateProfile({ country: country }));
    }, [dispatch]);
    useInitialEffect(function () {
        dispatch(fetchProfileData(id));
    });
    return (_jsx(DynamicModuleLoader, __assign({ reducers: reducers }, { children: _jsxs(VStack, __assign({ gap: "8", max: true, className: classNames('', {}, [className]) }, { children: [_jsx(EditableProfileCardHeader, { readonly: readonly }), (validateErrors === null || validateErrors === void 0 ? void 0 : validateErrors.length) && validateErrors.map(function (err) { return (_jsx(TextCustom, { theme: TextTheme.ERROR, text: validateErrorTranslates[err] }, err)); }), _jsx(ProfileCard, { data: formData, isLoading: isLoading, error: error, readOnly: readonly, onChangeFirstName: onChangeFirstName, onChangeLastName: onChangeLastName, onChangeAge: onChangeAge, onChangeCity: onChangeCity, onChangeAvatar: onChangeAvatar, onChangeUsername: onChangeUsername, onChangeCurrency: onChangeCurrency, onChangeCountry: onChangeCountry })] })) })));
});
