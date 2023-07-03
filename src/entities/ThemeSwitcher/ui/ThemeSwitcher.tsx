import { memo, useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import ThemeIcon from '@/shared/assets/icons/theme-dark.svg';
import { Button, ButtonTheme } from '@/shared/ui/deprecated/Button/Button';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { saveJsonSettings } from '@/entities/User';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { IconComponent } from '@/shared/ui/deprecated/IconComponent/IconComponent';

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
    const { toggleTheme } = useTheme();
    const dispatch = useAppDispatch();

    const onToggleHandler = useCallback(() => {
        toggleTheme((theme) => {
            dispatch(saveJsonSettings({ theme }));
        });
    }, [dispatch, toggleTheme]);

    return (
        <Button
            className={classNames('', {}, [className])}
            theme={ButtonTheme.CLEAR}
            onClick={onToggleHandler}
        >
            {/* {theme === Theme.LIGHT ? <LightIcon /> : <DarkIcon />} */}
            <IconComponent Svg={ThemeIcon} width={40} height={40} inverted />
        </Button>
    );
});
