import { jsx as _jsx } from "react/jsx-runtime";
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Select } from 'shared/ui/Select/Select';
import { memo, useCallback } from 'react';
import { Country } from '../../model/types/country';
var options = [
    { value: Country.ARMINIA, content: Country.ARMINIA },
    { value: Country.RUSSIA, content: Country.RUSSIA },
    { value: Country.BELARUS, content: Country.BELARUS },
    { value: Country.KAZAHSTAN, content: Country.KAZAHSTAN },
    { value: Country.UKRAINE, content: Country.UKRAINE },
];
export var CountrySelect = memo(function (_a) {
    var className = _a.className, value = _a.value, onChange = _a.onChange, readonly = _a.readonly;
    var t = useTranslation().t;
    var onChangeHandler = useCallback(function (value) {
        onChange === null || onChange === void 0 ? void 0 : onChange(value);
    }, [onChange]);
    return (_jsx(Select, { className: classNames('', {}, [className]), label: t('Country'), options: options, value: value, onChange: onChangeHandler, readonly: readonly }));
});
