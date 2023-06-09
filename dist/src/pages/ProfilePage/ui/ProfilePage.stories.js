import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import AvatarImg from 'shared/assets/tests/storybook.jpg';
import { ProfilePage } from 'pages/ProfilePage';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { RouterDecorator } from 'shared/config/storybook/RouterDecorator/RouterDecorator';
// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
var meta = {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
    decorators: [StoreDecorator({
            profile: {
                form: {
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
        }), RouterDecorator, ThemeDecorator(Theme.DARK)],
};
export default meta;
export var ProfilePageDark = {
    args: {},
};
