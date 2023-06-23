import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Avatar } from '../Avatar/Avatar';
import AvatarImg from './storybook.jpg';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Avatar> = {
    title: 'shared/Avatar',
    component: Avatar,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const AvatarBigDarkTheme: Story = {
    args: {
        size: 150,
        src: AvatarImg,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const AvatarSmallLightTheme: Story = {
    args: {
        size: 50,
        src: AvatarImg,
    },
    decorators: [ThemeDecorator(Theme.LIGHT)],
};
