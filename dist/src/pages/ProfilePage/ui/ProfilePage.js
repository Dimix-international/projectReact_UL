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
import { TextCustom } from 'shared/ui/TextCustom/TextCustom';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { Page } from 'widgets/Page/Page';
import { EditableProfileCard } from 'features/editableProfileCard';
import { profileReducer } from 'features/editableProfileCard/model/slice/profileSlice';
var reducers = {
    profile: profileReducer,
};
var ProfilePage = function (_a) {
    var className = _a.className;
    var t = useTranslation('profile').t;
    var id = useParams().id;
    if (!id) {
        return _jsx(TextCustom, { text: t('Профиль не найден') });
    }
    return (_jsx(DynamicModuleLoader, __assign({ reducers: reducers }, { children: _jsx(Page, __assign({ className: classNames('', {}, [className]) }, { children: _jsx(EditableProfileCard, { id: id }) })) })));
};
export default ProfilePage;
