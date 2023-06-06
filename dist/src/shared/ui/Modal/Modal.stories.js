import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Modal } from './Modal';
// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
var meta = {
    title: 'shared/Modal',
    component: Modal,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
};
export default meta;
export var ModalLight = {
    args: {
        isOpen: true,
        children: 'ModalLight',
    },
    decorators: [ThemeDecorator(Theme.LIGHT)],
};
export var ModalDark = {
    args: {
        isOpen: true,
        children: 'ModalDark',
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
