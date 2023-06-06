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
import { DynamicModuleLoader } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { fetchProfileData, getProfileData, getProfileError, getProfileLoading, ProfileCard, profileReducer, } from 'entities/Profile';
import { useEffect } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
var reducers = {
    profile: profileReducer,
};
var ProfilePage = function (_a) {
    var className = _a.className;
    var dispatch = useAppDispatch();
    var data = useSelector(getProfileData);
    var isLoading = useSelector(getProfileLoading);
    var error = useSelector(getProfileError);
    useEffect(function () {
        dispatch(fetchProfileData());
    }, [dispatch]);
    return (_jsx(DynamicModuleLoader, __assign({ reducers: reducers }, { children: _jsx("div", __assign({ className: classNames('', {}, [className]) }, { children: _jsx(ProfileCard, { data: data, isLoading: isLoading, error: error }) })) })));
};
export default ProfilePage;
