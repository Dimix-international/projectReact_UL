import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { ArticleDetails } from './ArticleDetails';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof ArticleDetails> = {
    title: 'ui/ArticleDetails',
    component: ArticleDetails,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
    decorators: [ThemeDecorator(Theme.LIGHT)],
};

export default meta;
type Story = StoryObj<typeof ArticleDetails>;

export const Normal: Story = {
    args: {},
};
