import { useContext } from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from '../lib/ThemeContext';
export function useTheme() {
    var _a = useContext(ThemeContext), theme = _a.theme, setTheme = _a.setTheme;
    var toggleTheme = function () {
        var newTheme;
        switch (theme) {
            case Theme.DARK: {
                newTheme = Theme.LIGHT;
                break;
            }
            case Theme.LIGHT: {
                newTheme = Theme.ORANGE;
                break;
            }
            case Theme.ORANGE: {
                newTheme = Theme.DARK;
                break;
            }
            default: {
                newTheme = Theme.DARK;
            }
        }
        setTheme === null || setTheme === void 0 ? void 0 : setTheme(newTheme);
        document.body.className = newTheme;
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    };
    return {
        theme: theme || Theme.DARK,
        toggleTheme: toggleTheme,
    };
}
