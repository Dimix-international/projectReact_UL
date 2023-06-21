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
import { useTranslation } from 'react-i18next';
import { TextCustom } from 'shared/ui/TextCustom/TextCustom';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { HStack } from 'shared/ui/Stack';
import { classNames } from 'shared/lib/classNames/classNames';
import { getUserAuthData } from 'entities/User';
import { profileActions } from '../../model/slice/profileSlice';
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';
import { updateProfileData } from '../../model/services/updateProfileData/updateProfileData';
export var EditableProfileCardHeader = memo(function (_a) {
    var className = _a.className, readonly = _a.readonly;
    var t = useTranslation('profile').t;
    var dispatch = useAppDispatch();
    var authData = useSelector(getUserAuthData);
    var profileData = useSelector(getProfileData);
    var canEdit = (authData === null || authData === void 0 ? void 0 : authData.id) === (profileData === null || profileData === void 0 ? void 0 : profileData.id);
    var onEdit = useCallback(function () {
        dispatch(profileActions.setReadonly(false));
    }, [dispatch]);
    var onCancelEdit = useCallback(function () {
        dispatch(profileActions.cancelEdit());
    }, [dispatch]);
    var onSave = useCallback(function () {
        dispatch(updateProfileData());
    }, [dispatch]);
    return (_jsxs(HStack, __assign({ max: true, justify: "between", className: classNames('', {}, [className]) }, { children: [_jsx(TextCustom, { title: t('profile') }), canEdit && (_jsx("div", { children: readonly
                    ? (_jsx(Button, __assign({ theme: ButtonTheme.OUTLINE, onClick: onEdit }, { children: t('edit') })))
                    : (_jsxs(HStack, __assign({ gap: "8" }, { children: [_jsx(Button, __assign({ theme: ButtonTheme.OUTLINE_RED, onClick: onCancelEdit }, { children: t('Cancel') })), _jsx(Button, __assign({ theme: ButtonTheme.BACKGROUND_INVERTED, onClick: onSave }, { children: t('Save') }))] }))) }))] })));
});
