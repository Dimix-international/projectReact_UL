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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useState, useEffect, useRef, } from 'react';
import cls from './Input.module.scss';
export var Input = memo(function (props) {
    var _a;
    var className = props.className, value = props.value, _b = props.type, type = _b === void 0 ? 'text' : _b, autofocus = props.autofocus, placeholder = props.placeholder, onChange = props.onChange, _c = props.readOnly, readOnly = _c === void 0 ? false : _c, restProps = __rest(props, ["className", "value", "type", "autofocus", "placeholder", "onChange", "readOnly"]);
    var ref = useRef(null);
    var _d = useState(false), isFocused = _d[0], setIsFocused = _d[1];
    var _e = useState(0), caretPosition = _e[0], setCaretPosition = _e[1];
    var onChangeHandler = function (e) {
        onChange === null || onChange === void 0 ? void 0 : onChange(e.target.value);
        setCaretPosition(e.target.value.length);
    };
    var onFocusHandler = function () {
        setIsFocused(true);
    };
    var onBlurHandler = function () {
        setIsFocused(false);
    };
    var onSelectHandler = function (e) {
        var _a;
        setCaretPosition(((_a = e === null || e === void 0 ? void 0 : e.target) === null || _a === void 0 ? void 0 : _a.selectionStart) || 0);
    };
    useEffect(function () {
        var _a;
        if (autofocus) {
            setIsFocused(true);
            (_a = ref.current) === null || _a === void 0 ? void 0 : _a.focus();
        }
    }, [autofocus]);
    var mods = (_a = {},
        _a[cls.readonly] = readOnly,
        _a);
    return (_jsxs("div", __assign({ className: classNames(cls.InputWrapper, mods, [className]) }, { children: [placeholder && (_jsx("div", __assign({ className: cls.placeholder }, { children: "".concat(placeholder, ">") }))), _jsxs("div", __assign({ className: cls.caretWrapper }, { children: [_jsx("input", __assign({ ref: ref, type: type, value: value, className: classNames(cls.input, {}, []), onChange: onChangeHandler, onFocus: onFocusHandler, onBlur: onBlurHandler, onSelect: onSelectHandler, readOnly: readOnly }, restProps)), isFocused && !readOnly && (_jsx("span", { className: classNames(cls.caret, {}, []), style: {
                            left: "".concat(caretPosition * 9, "px"),
                        } }))] }))] })));
});
