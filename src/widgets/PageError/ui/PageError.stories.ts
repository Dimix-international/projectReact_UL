import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { RouterDecorator } from '@/shared/config/storybook/RouterDecorator/RouterDecorator';
import { PageError } from './PageError';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof PageError> = {
    title: 'widget/PageError',
    component: PageError,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof PageError>;

export const ErrorPage: Story = {
    args: {},
    decorators: [RouterDecorator, ThemeDecorator(Theme.LIGHT)],
};
