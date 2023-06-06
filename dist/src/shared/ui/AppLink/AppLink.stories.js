import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { RouterDecorator } from 'shared/config/storybook/RouterDecorator/RouterDecorator';
import { AppLink, AppLinkTheme } from './AppLink';
// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
var meta = {
    title: 'shared/AppLink',
    component: AppLink,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
    args: {
        to: '/',
    },
    decorators: [ThemeDecorator(Theme.LIGHT)],
};
export default meta;
export var LinkPrimary = {
    args: {
        theme: AppLinkTheme.PRIMARY,
        children: 'LinkPrimary',
    },
    decorators: [RouterDecorator],
};
export var LinkPrimaryDarkTheme = {
    args: {
        theme: AppLinkTheme.PRIMARY,
        children: 'LinkPrimaryDarkTheme',
    },
    decorators: [RouterDecorator, ThemeDecorator(Theme.DARK)],
};
export var LinkSecondary = {
    args: {
        theme: AppLinkTheme.SECONDARY,
        children: 'LinkSecondary',
    },
    decorators: [RouterDecorator],
};
export var LinkSecondaryDarkTheme = {
    args: {
        theme: AppLinkTheme.PRIMARY,
        children: 'LinkSecondaryDarkTheme',
    },
    decorators: [RouterDecorator, ThemeDecorator(Theme.DARK)],
};
