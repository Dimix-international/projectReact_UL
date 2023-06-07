import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Button, ButtonSize, ButtonTheme } from './Button';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Button> = {
    title: 'shared/Button',
    component: Button,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
    args: {
        children: 'Primary',
    },
};

export const ClearLight: Story = {
    args: {
        children: 'Clear',
        theme: ButtonTheme.CLEAR,
    },
    decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const ClearInvertedDark: Story = {
    args: {
        children: 'Clear',
        theme: ButtonTheme.CLEAR_INVERTED,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const OutlineDark: Story = {
    args: {
        children: 'Outline',
        theme: ButtonTheme.OUTLINE,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const OutlineRed: Story = {
    args: {
        children: 'Outline',
        theme: ButtonTheme.OUTLINE_RED,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const BackgroundTheme: Story = {
    args: {
        children: 'Text',
        theme: ButtonTheme.BACKGROUND,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const BackgroundInvertedTheme: Story = {
    args: {
        children: 'Text',
        theme: ButtonTheme.BACKGROUND_INVERTED,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const Square: Story = {
    args: {
        children: '>',
        theme: ButtonTheme.BACKGROUND_INVERTED,
        square: true,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const SquareL: Story = {
    args: {
        children: '>',
        theme: ButtonTheme.BACKGROUND_INVERTED,
        square: true,
        size: ButtonSize.L,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const SquareXL: Story = {
    args: {
        children: '>',
        theme: ButtonTheme.BACKGROUND_INVERTED,
        square: true,
        size: ButtonSize.XL,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const ButtonXL: Story = {
    args: {
        children: '>',
        theme: ButtonTheme.OUTLINE,
        size: ButtonSize.XL,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const ButtonDisabled: Story = {
    args: {
        children: 'Disabled',
        theme: ButtonTheme.OUTLINE,
        size: ButtonSize.XL,
        disabled: true,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
