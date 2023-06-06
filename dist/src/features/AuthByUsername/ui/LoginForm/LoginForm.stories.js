import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import LoginForm from './LoginForm';
// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
var meta = {
    title: 'features/LoginForm',
    component: LoginForm,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
    decorators: [StoreDecorator({
            loginForm: { username: 'admin', password: '123' },
        })],
};
export default meta;
export var LoginFormLight = {
    args: {},
    decorators: [ThemeDecorator(Theme.LIGHT)],
};
export var LoginFormDark = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK)],
};
export var LoginFormDarkWithError = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({
            loginForm: { username: 'admin', password: '123', error: 'Incorrect login or password' },
        })],
};
export var LoginFormDarkWithLoading = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({
            loginForm: { username: 'admin', password: '123', isLoading: true },
        })],
};
