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
import { Modal } from 'shared/ui/Modal/Modal';
import { classNames } from 'shared/lib/classNames/classNames';
import { Suspense } from 'react';
import { Loader } from 'shared/ui/Loader/Loader';
import { LoginFormAsync } from '../LoginForm/LoginForm.async';
export var LoginModal = function (props) {
    var isOpen = props.isOpen, className = props.className, onClose = props.onClose;
    return (_jsx(Modal, __assign({ isOpen: isOpen, className: classNames('', {}, [className]), onClose: onClose, lazy: true }, { children: _jsx(Suspense, __assign({ fallback: _jsx(Loader, {}) }, { children: _jsx(LoginFormAsync, { onSucces: onClose }) })) })));
};
