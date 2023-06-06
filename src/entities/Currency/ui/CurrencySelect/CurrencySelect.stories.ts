import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { CurrencySelect } from './CurrencySelect';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof CurrencySelect> = {
    title: 'entities/CurrencySelect',
    component: CurrencySelect,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
    decorators: [ThemeDecorator(Theme.DARK)],
};

export default meta;
type Story = StoryObj<typeof CurrencySelect>;

export const CurrencySelectDark: Story = {
    args: {},
};
