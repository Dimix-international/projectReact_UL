import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { TextCustom, TextSize, TextTheme } from './TextCustom';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof TextCustom> = {
    title: 'shared/TextCustom',
    component: TextCustom,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
    decorators: [ThemeDecorator(Theme.DARK)],
};

export default meta;
type Story = StoryObj<typeof TextCustom>;

export const TitleAndText: Story = {
    args: {
        text: 'text',
        title: 'Title',
    },
};

export const OnlyTitle: Story = {
    args: {
        title: 'Title',
    },
    decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const OnlyText: Story = {
    args: {
        text: 'text',
    },
};

export const TextError: Story = {
    args: {
        text: 'text',
        theme: TextTheme.ERROR,
    },
};

export const TextSizeL: Story = {
    args: {
        text: 'text',
        title: 'Title',
        size: TextSize.L,
    },
};

export const TextSizeM: Story = {
    args: {
        text: 'text',
        title: 'Title',
        size: TextSize.M,
    },
};
