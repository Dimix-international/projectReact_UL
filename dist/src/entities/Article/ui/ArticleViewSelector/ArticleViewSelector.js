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
import { jsx as _jsx } from "react/jsx-runtime";
import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { IconComponent } from 'shared/ui/IconComponent/IconComponent';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import ListIcon from 'shared/assets/icons/list-24-24.svg';
import TiledIcon from 'shared/assets/icons/tiled-24-24.svg';
import { ArticleView } from '../../model/types/article';
import cls from './ArticleViewSelector.module.scss';
var viewTypes = [
    {
        view: ArticleView.SMALL,
        icon: TiledIcon,
    },
    {
        view: ArticleView.BIG,
        icon: ListIcon,
    },
];
export var ArticleViewSelector = memo(function (props) {
    var className = props.className, onViewClick = props.onViewClick, view = props.view;
    // т.к. мы передаем новый вид отображения, а event нам не нужен, поэтому делаем функцию
    // которая вернет функцию (замыкание), на верхнем уровне мы принимаем тип, а в onClick передаем вызов функции,
    // которая вернет функцию
    var onClick = function (newView) { return function () {
        onViewClick === null || onViewClick === void 0 ? void 0 : onViewClick(newView); // onViewClick - попадем в слушатель события
    }; };
    return (_jsx("div", __assign({ className: classNames(cls.ArticleViewSelector, {}, [className]) }, { children: viewTypes.map(function (viewType) {
            var _a;
            return (_jsx(Button, __assign({ theme: ButtonTheme.CLEAR, onClick: onClick(viewType.view) }, { children: _jsx(IconComponent, { Svg: viewType.icon, className: classNames('', (_a = {}, _a[cls.notSelected] = viewType.view !== view, _a)) }) }), viewType.view));
        }) })));
});
