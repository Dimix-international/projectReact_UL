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
import { configureStore, } from '@reduxjs/toolkit';
import { counterReducer } from 'entities/Counter';
import { userReducer } from 'entities/User';
import { $api } from 'shared/api/api';
import { scrollRestorationReducer } from 'widgets/Page/features/ScrollRestoration';
import { rtkApi } from 'shared/api/rtkApi';
import { createReducerManager } from './reducerManager';
export function createReduxStore(initialState, asyncReducers) {
    var _a;
    var rootReducer = __assign(__assign({}, asyncReducers), (_a = { counter: counterReducer, user: userReducer, scrollRestoration: scrollRestorationReducer }, _a[rtkApi.reducerPath] = rtkApi.reducer, _a));
    var reducerManager = createReducerManager(rootReducer);
    // принимает 3 типа
    // 1- тип стора
    // 2 - тип actions
    // 3 - Middlewares
    var extraArg = {
        api: $api,
    };
    var store = configureStore({
        reducer: reducerManager.reduce,
        devTools: __IS_DEV__,
        preloadedState: initialState,
        middleware: function (getDefaultMiddleware) { return getDefaultMiddleware({
            thunk: {
                extraArgument: extraArg,
            },
        }).concat(rtkApi.middleware); },
    });
    // @ts-ignore
    store.reducerManager = reducerManager;
    return store;
}
