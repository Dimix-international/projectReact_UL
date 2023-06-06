import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Button, ButtonSize, ButtonTheme } from './Button';
// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
var meta = {
    title: 'ui/Button',
    component: Button,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
};
export default meta;
export var Primary = {
    args: {
        children: 'Primary',
    },
};
export var ClearLight = {
    args: {
        children: 'Clear',
        theme: ButtonTheme.CLEAR,
    },
    decorators: [ThemeDecorator(Theme.LIGHT)],
};
export var ClearInvertedDark = {
    args: {
        children: 'Clear',
        theme: ButtonTheme.CLEAR_INVERTED,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
export var OutlineDark = {
    args: {
        children: 'Outline',
        theme: ButtonTheme.OUTLINE,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
export var BackgroundTheme = {
    args: {
        children: 'Text',
        theme: ButtonTheme.BACKGROUND,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
export var BackgroundInvertedTheme = {
    args: {
        children: 'Text',
        theme: ButtonTheme.BACKGROUND_INVERTED,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
export var Square = {
    args: {
        children: '>',
        theme: ButtonTheme.BACKGROUND_INVERTED,
        square: true,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
export var SquareL = {
    args: {
        children: '>',
        theme: ButtonTheme.BACKGROUND_INVERTED,
        square: true,
        size: ButtonSize.L,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
export var SquareXL = {
    args: {
        children: '>',
        theme: ButtonTheme.BACKGROUND_INVERTED,
        square: true,
        size: ButtonSize.XL,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
export var ButtonXL = {
    args: {
        children: '>',
        theme: ButtonTheme.OUTLINE,
        size: ButtonSize.XL,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
export var ButtonDisabled = {
    args: {
        children: 'Disabled',
        theme: ButtonTheme.OUTLINE,
        size: ButtonSize.XL,
        disabled: true,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
