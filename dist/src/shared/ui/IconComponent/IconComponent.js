import { jsx as _jsx } from "react/jsx-runtime";
import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './IconComponent.module.scss';
export var IconComponent = memo(function (props) {
    var className = props.className, Svg = props.Svg;
    return (_jsx(Svg, { className: classNames(cls.Icon, {}, [className]) }));
});
