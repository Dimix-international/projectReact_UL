import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Loader } from './Loader';
// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
var meta = {
    title: 'shared/Loader',
    component: Loader,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
    decorators: [ThemeDecorator(Theme.LIGHT)],
};
export default meta;
export var LoaderLight = {
    args: {},
};
export var LoaderDark = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK)],
};
