import { jsx as _jsx } from "react/jsx-runtime";
import { classNames } from 'shared/lib/classNames/classNames';
import { useMemo } from 'react';
import cls from './Avatar.module.scss';
export var Avatar = function (_a) {
    var className = _a.className, src = _a.src, size = _a.size, alt = _a.alt;
    var mods = {};
    var styles = useMemo(function () { return ({
        width: size || 100,
        height: size || 100,
    }); }, [size]);
    return (_jsx("img", { src: src, alt: alt, style: styles, className: classNames(cls.Avatar, mods, [className]) }));
};
