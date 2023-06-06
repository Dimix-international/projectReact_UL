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
import { memo, useMemo, useState } from 'react';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { SidebarItemsList } from '../../model/items';
import { SidebarItem } from '../SidebarItem/SidebarItem';
import cls from './Sidebar.module.scss';
export var Sidebar = memo(function (_a) {
    var _b;
    var className = _a.className;
    var _c = useState(false), collapsed = _c[0], setCollapsed = _c[1];
    var onToggle = function () { return setCollapsed(function (prev) { return !prev; }); };
    var itemsList = useMemo(function () { return SidebarItemsList.map(function (item) { return (_jsx(SidebarItem, { item: item, collapsed: collapsed }, item.path)); }); }, [collapsed]);
    return (_jsxs("div", __assign({ className: classNames(cls.Sidebar, (_b = {}, _b[cls.collapsed] = collapsed, _b), [className]) }, { children: [_jsx(Button, __assign({ className: cls.collapseBtn, onClick: onToggle, theme: ButtonTheme.BACKGROUND_INVERTED, square: true, size: ButtonSize.L }, { children: collapsed ? '>' : '<' })), _jsx("div", __assign({ className: cls.items }, { children: itemsList })), _jsxs("div", __assign({ className: cls.switchers }, { children: [_jsx(ThemeSwitcher, {}), _jsx(LangSwitcher, { className: cls.lang, short: collapsed })] }))] })));
});
