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
import { classNames } from 'shared/lib/classNames/classNames';
import { useCallback, useEffect, useRef, useState, } from 'react';
import { Portal } from 'shared/ui/Portal/Portal';
import cls from './Modal.module.scss';
var ANIMATION_DELAY = 300;
export var Modal = function (props) {
    var _a;
    var className = props.className, children = props.children, isOpen = props.isOpen, onClose = props.onClose, lazy = props.lazy;
    var _b = useState(false), isClosing = _b[0], setIsClosing = _b[1];
    var _c = useState(false), isMounted = _c[0], setIsMounted = _c[1];
    var timeRef = useRef();
    var mods = (_a = {},
        _a[cls.opened] = isOpen,
        _a[cls.isClosing] = isClosing,
        _a);
    var closeHandler = useCallback(function () {
        if (onClose) {
            setIsClosing(true);
            timeRef.current = setTimeout(function () {
                onClose();
                setIsClosing(false);
            }, ANIMATION_DELAY);
        }
    }, [onClose]);
    var onContentClick = function (e) {
        e.stopPropagation();
    };
    var onKeyDown = useCallback(function (e) {
        if (e.key === 'Escape') {
            closeHandler();
        }
    }, [closeHandler]);
    useEffect(function () {
        if (isOpen) {
            setIsMounted(true);
        }
    }, [isOpen]);
    useEffect(function () {
        if (isOpen) {
            window.addEventListener('keydown', onKeyDown);
        }
        return function () {
            clearTimeout(timeRef.current);
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [isOpen, onKeyDown]);
    if (lazy && !isMounted) {
        return null;
    }
    return (_jsx(Portal, { children: _jsx("div", __assign({ className: classNames(cls.Modal, mods, [className]) }, { children: _jsx("div", __assign({ className: cls.overlay, onClick: closeHandler }, { children: _jsx("div", __assign({ className: cls.content, onClick: onContentClick }, { children: children })) })) })) }));
};
