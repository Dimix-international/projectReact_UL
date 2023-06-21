import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { ProfileCard } from 'entities/Profile';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import AvatarImg from 'shared/assets/tests/storybook.jpg';
// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
var meta = {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
    decorators: [ThemeDecorator(Theme.DARK)],
};
export default meta;
export var ProfileCardDark = {
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
export var ProfileCardWithLoading = {
    args: {
        isLoading: true,
    },
};
export var ProfileCardWithError = {
    args: {
        error: 'Error something!',
    },
};
