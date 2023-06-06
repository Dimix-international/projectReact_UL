import { useContext } from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from '../lib/ThemeContext';
export function useTheme() {
    var _a = useContext(ThemeContext), theme = _a.theme, setTheme = _a.setTheme;
    var toggleTheme = function () {
        var newTheme = theme === Theme.DARK
            ? Theme.LIGHT
            : Theme.DARK;
        setTheme === null || setTheme === void 0 ? void 0 : setTheme(newTheme);
        document.body.className = newTheme;
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    };
    return {
        theme: theme || Theme.DARK,
        toggleTheme: toggleTheme,
    };
}
