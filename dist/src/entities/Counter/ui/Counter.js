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
import { Button } from 'shared/ui/Button/Button';
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { counterActions } from '../model/slice/counterSlice';
export var Counter = function () {
    var dispatch = useDispatch();
    var counterValue = useSelector(getCounterValue);
    var t = useTranslation().t;
    var incrementValue = useCallback(function () {
        dispatch(counterActions.increment());
    }, [dispatch]);
    var decrementValue = useCallback(function () {
        dispatch(counterActions.decrement());
    }, [dispatch]);
    return (_jsxs("div", { children: [_jsx("h1", __assign({ "data-testid": "value-title" }, { children: counterValue })), _jsx(Button, __assign({ "data-testid": "increment-btn", onClick: incrementValue }, { children: t('increment') })), _jsx(Button, __assign({ "data-testid": "decrement-btn", onClick: decrementValue }, { children: t('decrement') }))] }));
};
