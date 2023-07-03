import {
    InputHTMLAttributes,
    memo,
    ChangeEvent,
    useState,
    useEffect,
    useRef,
} from 'react';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import cls from './Input.module.scss';

// Omit - забираем все пропсы, и можем исключить не нужные
// используем т.к. конфликт типов value и onChange -
// наше и они есть в  InputHTMLAttributes
type HTMLInputProps = Omit<
    InputHTMLAttributes<HTMLInputElement>,
    'value' | 'onChange' | 'readOnly'
>;

interface InputProps extends HTMLInputProps {
    className?: string;
    value?: string | number;
    onChange?: (value: string) => void;
    autofocus?: boolean;
    readOnly?: boolean;
}

/**
 * используем новые компоненты из папки redesigned
 * @deprecated
 */

export const Input = memo((props: InputProps) => {
    const {
        className,
        value,
        type = 'text',
        autofocus,
        placeholder,
        onChange,
        readOnly = false,
        ...restProps
    } = props;

    const ref = useRef<HTMLInputElement>(null);

    const [isFocused, setIsFocused] = useState(false);
    const [caretPosition, setCaretPosition] = useState(0);

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
        setCaretPosition(e.target.value.length);
    };

    const onFocusHandler = () => {
        setIsFocused(true);
    };

    const onBlurHandler = () => {
        setIsFocused(false);
    };

    const onSelectHandler = (e: any) => {
        setCaretPosition(e?.target?.selectionStart || 0);
    };

    useEffect(() => {
        if (autofocus) {
            setIsFocused(true);
            ref.current?.focus();
        }
    }, [autofocus]);

    const mods: Mods = {
        [cls.readonly]: readOnly,
    };

    return (
        <div className={classNames(cls.InputWrapper, mods, [className])}>
            {placeholder && (
                <div className={cls.placeholder}>{`${placeholder}>`}</div>
            )}
            <div className={cls.caretWrapper}>
                <input
                    ref={ref}
                    type={type}
                    value={value}
                    className={classNames(cls.input, {}, [])}
                    onChange={onChangeHandler}
                    onFocus={onFocusHandler}
                    onBlur={onBlurHandler}
                    onSelect={onSelectHandler}
                    readOnly={readOnly}
                    {...restProps}
                />
                {isFocused && !readOnly && (
                    <span
                        className={classNames(cls.caret, {}, [])}
                        style={{
                            left: `${caretPosition * 9}px`,
                        }}
                    />
                )}
            </div>
        </div>
    );
});
