import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { RouterDecorator } from '@/shared/config/storybook/RouterDecorator/RouterDecorator';
import { AppLink, AppLinkTheme } from './AppLink';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof AppLink> = {
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
type Story = StoryObj<typeof AppLink>;

export const LinkPrimary: Story = {
    args: {
        theme: AppLinkTheme.PRIMARY,
        children: 'LinkPrimary',
    },
    decorators: [RouterDecorator],
};

export const LinkPrimaryDarkTheme: Story = {
    args: {
        theme: AppLinkTheme.PRIMARY,
        children: 'LinkPrimaryDarkTheme',
    },
    decorators: [RouterDecorator, ThemeDecorator(Theme.DARK)],
};

export const LinkSecondary: Story = {
    args: {
        theme: AppLinkTheme.SECONDARY,
        children: 'LinkSecondary',
    },
    decorators: [RouterDecorator],
};

export const LinkSecondaryDarkTheme: Story = {
    args: {
        theme: AppLinkTheme.PRIMARY,
        children: 'LinkSecondaryDarkTheme',
    },
    decorators: [RouterDecorator, ThemeDecorator(Theme.DARK)],
};
