import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Input } from './Input';
// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
var meta = {
    title: 'ui/Input',
    component: Input,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
};
export default meta;
export var InputLight = {
    args: {
        autofocus: true,
        placeholder: 'Username',
        value: 'Username',
    },
    decorators: [ThemeDecorator(Theme.LIGHT)],
};
export var InputDark = {
    args: {
        autofocus: true,
        placeholder: 'Username',
        value: 'Username',
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
