import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { RouterDecorator } from '@/shared/config/storybook/RouterDecorator/RouterDecorator';
import LoginForm from './LoginForm';
import { Theme } from '@/shared/const/theme';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof LoginForm> = {
    title: 'features/LoginForm',
    component: LoginForm,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
    decorators: [StoreDecorator({
        loginForm: { username: 'admin', password: '123' },
    }), RouterDecorator],
};

export default meta;
type Story = StoryObj<typeof LoginForm>;

export const LoginFormLight: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const LoginFormDark: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const LoginFormDarkWithError: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({
        loginForm: { username: 'admin', password: '123', error: 'Incorrect common or password' },
    })],
};

export const LoginFormDarkWithLoading: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({
        loginForm: { username: 'admin', password: '123', isLoading: true },
    })],
};
