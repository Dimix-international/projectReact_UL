import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { RouterDecorator } from 'shared/config/storybook/RouterDecorator/RouterDecorator';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Navbar } from './Navbar';
// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
var meta = {
    title: 'widget/Navbar',
    component: Navbar,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
    decorators: [StoreDecorator({}), RouterDecorator],
};
export default meta;
export var Light = {
    args: {},
    decorators: [ThemeDecorator(Theme.LIGHT)],
};
export var Dark = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK)],
};
export var AuthUserDark = {
    args: {},
    decorators: [
        StoreDecorator({ user: { authData: { username: 'admin', id: '123' } } }),
        ThemeDecorator(Theme.DARK),
    ],
};
