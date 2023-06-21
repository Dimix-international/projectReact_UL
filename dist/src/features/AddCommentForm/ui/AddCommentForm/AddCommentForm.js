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
import { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useSelector } from 'react-redux';
import { DynamicModuleLoader } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { addCommentSliceReducer, addCommentSliceActions } from '../../model/slices/addCommentFormSlice';
import cls from './AddCommentForm.module.scss';
import { getAddCommentFormText, getAddCommentFormError } from '../../model/selectors/addCommentFormSelector';
var reducers = {
    addCommentForm: addCommentSliceReducer,
};
var AddCommentForm = memo(function (props) {
    var className = props.className, onSendComment = props.onSendComment;
    var t = useTranslation().t;
    var text = useSelector(getAddCommentFormText);
    var error = useSelector(getAddCommentFormError);
    var dispatch = useAppDispatch();
    var onCommentTextChange = useCallback(function (value) {
        dispatch(addCommentSliceActions.setText(value));
    }, [dispatch]);
    var sendCommentHandler = useCallback(function () {
        onSendComment === null || onSendComment === void 0 ? void 0 : onSendComment(text || '');
        dispatch(addCommentSliceActions.setText(''));
    }, [dispatch, onSendComment, text]);
    return (_jsx(DynamicModuleLoader, __assign({ reducers: reducers }, { children: _jsxs("div", __assign({ className: classNames(cls.AddCommentForm, {}, [className]) }, { children: [_jsx(Input, { placeholder: t('Enter comment'), value: text, onChange: onCommentTextChange }), _jsx(Button, __assign({ theme: ButtonTheme.BACKGROUND, onClick: sendCommentHandler }, { children: t('Send') }))] })) })));
});
export default AddCommentForm;
