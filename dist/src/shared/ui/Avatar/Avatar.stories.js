import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import AvatarImg from './storybook.jpg';
// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
var meta = {
    title: 'shared/Avatar',
    component: Avatar,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
};
export default meta;
export var AvatarBigDarkTheme = {
    args: {
        size: 150,
        src: AvatarImg,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
export var AvatarSmallLightTheme = {
    args: {
        size: 50,
        src: AvatarImg,
    },
    decorators: [ThemeDecorator(Theme.LIGHT)],
};
