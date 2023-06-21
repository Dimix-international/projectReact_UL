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
import 'app/styles/index.scss';
import { BrowserRouter } from 'react-router-dom';
import { Suspense } from 'react';
export var RouterDecorator = function (Story) { return (_jsx(BrowserRouter, { children: _jsx(Suspense, __assign({ fallback: "" }, { children: _jsx(Story, {}) })) })); };
