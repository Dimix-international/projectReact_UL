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
import { memo, useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { LoginModal } from 'features/AuthByUsername';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData, userActions } from 'entities/User';
import { TextCustom, TextTheme } from 'shared/ui/TextCustom/TextCustom';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Dropdown } from 'shared/ui/Dropdown/Dropdown';
import cls from './Navbar.module.scss';
export var Navbar = memo(function (_a) {
    var className = _a.className;
    var t = useTranslation().t;
    var authData = useSelector(getUserAuthData);
    var dispatch = useDispatch();
    var _b = useState(false), isAuthModal = _b[0], setIsAuthModal = _b[1];
    var onOpenModal = useCallback(function () {
        setIsAuthModal(true);
    }, []);
    var onCloseModal = useCallback(function () {
        setIsAuthModal(false);
    }, []);
    var onLogout = useCallback(function () {
        dispatch(userActions.logout());
    }, [dispatch]);
    if (authData) {
        return (_jsxs("header", __assign({ className: classNames(cls.Navbar, {}, [className]) }, { children: [_jsx(TextCustom, { className: cls.appName, title: t('Ulbi TV App'), theme: TextTheme.INVERTED }), _jsx(AppLink, __assign({ to: RoutePath.article_create, theme: AppLinkTheme.SECONDARY, className: cls.createBtn }, { children: t('Создать статью') })), _jsx(Dropdown, { direction: "bottom left", className: cls.dropdown, items: [
                        {
                            content: t('profile'),
                            href: RoutePath.profile + authData.id,
                        },
                        {
                            content: t('exit'),
                            onClick: onLogout,
                        },
                    ], trigger: _jsx(Avatar, { size: 30, src: authData.avatar }) })] })));
    }
    return (_jsxs("div", __assign({ className: classNames(cls.Navbar, {}, [className]) }, { children: [_jsx(Button, __assign({ theme: ButtonTheme.CLEAR_INVERTED, className: cls.links, onClick: onOpenModal }, { children: t('enter') })), isAuthModal && (_jsx(LoginModal, { isOpen: isAuthModal, onClose: onCloseModal }))] })));
});
