import 'app/styles/index.scss';
import { Decorator } from '@storybook/react';
import { Suspense } from 'react';

export const RouterDecorator:Decorator = (Story) => (
    <Suspense fallback=""><Story /></Suspense>
);
