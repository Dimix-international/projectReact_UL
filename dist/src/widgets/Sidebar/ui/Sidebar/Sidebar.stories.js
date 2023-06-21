import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { RouterDecorator } from 'shared/config/storybook/RouterDecorator/RouterDecorator';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Sidebar } from './Sidebar';
// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
var meta = {
    title: 'widget/Sidebar',
    component: Sidebar,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
    decorators: [StoreDecorator({
            user: {
                authData: {},
            },
        }), RouterDecorator],
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
export var NotAuthUser = {
    args: {},
    decorators: [StoreDecorator({
            user: {},
        }), ThemeDecorator(Theme.DARK)],
};
