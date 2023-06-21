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
import { memo, useRef, } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useInfiniteScroll } from 'shared/lib/hooks/useInfiniteScroll/useInfiniteScroll';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getScrollRestorationByPath } from 'widgets/Page/features/ScrollRestoration';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useThrottle } from 'shared/lib/hooks/useThrottle/useThrottle';
import { scrollRestorationActions } from './features/ScrollRestoration/model/slices/scrollRestorationSlice';
import cls from './Page.module.scss';
export var Page = memo(function (props) {
    var className = props.className, children = props.children, onScrollEnd = props.onScrollEnd;
    var wrapperRef = useRef();
    var triggerRef = useRef();
    var dispatch = useAppDispatch();
    var pathname = useLocation().pathname;
    // т.к. селектор принимает кроме стэйта аргумент, то используем передаем функцию, т.к. useSelector работает только 1 аргументом
    var scrollPosition = useSelector(function (state) { return getScrollRestorationByPath(state, pathname); });
    useInfiniteScroll({
        triggerRef: triggerRef,
        wrapperRef: wrapperRef,
        callback: onScrollEnd,
    });
    useInitialEffect(function () {
        wrapperRef.current.scrollTop = scrollPosition;
    });
    var onScroll = useThrottle(function (e) {
        var scrollTop = e.currentTarget.scrollTop;
        dispatch(scrollRestorationActions.setScrollPosition({
            path: pathname,
            position: scrollTop,
        }));
    }, 500);
    return (_jsxs("section", __assign({ ref: wrapperRef, className: classNames(cls.Page, {}, [className]), onScroll: onScroll }, { children: [children, onScrollEnd ? _jsx("div", { ref: triggerRef, className: cls.trigger }) : null] })));
});
