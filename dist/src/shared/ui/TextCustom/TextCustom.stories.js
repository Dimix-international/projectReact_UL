import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { TextCustom, TextTheme } from './TextCustom';
// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
var meta = {
    title: 'shared/TextCustom',
    component: TextCustom,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
    decorators: [ThemeDecorator(Theme.DARK)],
};
export default meta;
export var TitleAndText = {
    args: {
        text: 'text',
        title: 'Title',
    },
};
export var OnlyTitle = {
    args: {
        title: 'Title',
    },
    decorators: [ThemeDecorator(Theme.LIGHT)],
};
export var OnlyText = {
    args: {
        text: 'text',
    },
};
export var TextError = {
    args: {
        text: 'text',
        theme: TextTheme.ERROR,
    },
};
