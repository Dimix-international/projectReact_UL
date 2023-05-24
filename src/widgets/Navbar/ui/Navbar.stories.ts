import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { RouterDecorator } from 'shared/config/storybook/RouterDecorator/RouterDecorator';
import { Navbar } from './Navbar';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Navbar> = {
    title: 'widget/Navbar',
    component: Navbar,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Navbar>;

export const Light: Story = {
    args: {},
    decorators: [RouterDecorator, ThemeDecorator(Theme.LIGHT)],
};

export const Dark: Story = {
    args: {},
    decorators: [RouterDecorator, ThemeDecorator(Theme.DARK)],
};
