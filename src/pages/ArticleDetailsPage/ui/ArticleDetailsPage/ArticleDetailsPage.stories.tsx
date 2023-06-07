import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import ArticleDetailsPage from './ArticleDetailsPage';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof ArticleDetailsPage> = {
    title: 'ui/ArticleDetailsPage',
    component: ArticleDetailsPage,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
    decorators: [ThemeDecorator(Theme.LIGHT)],
};

export default meta;
type Story = StoryObj<typeof ArticleDetailsPage>;

export const Normal: Story = {
    args: {},
};
