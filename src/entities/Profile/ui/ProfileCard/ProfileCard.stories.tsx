import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Currency } from '@/entities/Currency';
import { Country } from '@/entities/Country';
import AvatarImg from '@/shared/assets/tests/storybook.jpg';
import { ProfileCard } from '../../ui/ProfileCard/ProfileCard';
import { Theme } from '@/shared/const/theme';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof ProfileCard> = {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
    decorators: [ThemeDecorator(Theme.DARK)],
};

export default meta;
type Story = StoryObj<typeof ProfileCard>;

export const ProfileCardDark: Story = {
    args: {
        data: {
            first: 'Дмитрий',
            lastname: 'Мельников',
            age: 22,
            currency: Currency.USD,
            country: Country.BELARUS,
            city: 'Гомель',
            username: '',
            avatar: AvatarImg,
        },
    },
};

export const ProfileCardWithLoading: Story = {
    args: {
        isLoading: true,
    },
};

export const ProfileCardWithError: Story = {
    args: {
        error: 'Error something!',
    },
};
