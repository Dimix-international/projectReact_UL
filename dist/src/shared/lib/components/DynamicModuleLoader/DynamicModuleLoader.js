import { Fragment as _Fragment, jsx as _jsx } from "react/jsx-runtime";
import { useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';
export var DynamicModuleLoader = function (props) {
    var children = props.children, reducers = props.reducers, _a = props.removeAfterUnmount, removeAfterUnmount = _a === void 0 ? true : _a;
    var store = useStore();
    var dispatch = useDispatch();
    useEffect(function () {
        // подгрузим редьюсер при монтировании компоненты
        var mountedReducers = store.reducerManager.getReducerMap();
        Object.entries(reducers).forEach(function (_a) {
            var name = _a[0], reducer = _a[1];
            var mounted = mountedReducers[name];
            if (!mounted) {
                store.reducerManager.add(name, reducer);
                // отследим когда редьюсеры инициализируются
                dispatch({ type: "@INIT ".concat(name, " reducer") });
            }
        });
        return function () {
            if (removeAfterUnmount) {
                // зачищаем при демонтировании компоненты
                Object.entries(reducers).forEach(function (_a) {
                    var name = _a[0];
                    store.reducerManager.remove(name);
                    dispatch({ type: "@DESTROY ".concat(name, " reducer") });
                });
            }
        };
        // eslint-disable-next-line
    }, []);
    return (_jsx(_Fragment, { children: children }));
};
